import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import {
  LoadingState,
  MAX_REQUEST_WAITING_EXPIRE_TIME,
  MIN_REQUEST_WAITING_EXPIRE_TIME,
} from '@/constants/loading';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectStatus, setStatus } from '@/redux/slices/loading';

import { CustomModal } from '../Modal';
import { useTranslation } from 'react-i18next';

export function Loader() {
  const { t } = useTranslation();
  const [showLoading, setShowLoading] = useState(false);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();
  const expireTimeout = useRef<NodeJS.Timeout>();
  const minTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (status === LoadingState.Loading) {
      minTimeout.current = setTimeout(() => {
        setShowLoading(true);
      }, MIN_REQUEST_WAITING_EXPIRE_TIME);

      expireTimeout.current = setTimeout(() => {
        setShowLoading(false);
        dispatch(
          setStatus({
            status: LoadingState.Failed,
            errorMessage: t('errors.requestWaitingTime'),
          })
        );
      }, MAX_REQUEST_WAITING_EXPIRE_TIME);
    } else {
      setShowLoading(false);
    }

    return () => {
      clearTimeout(minTimeout.current);
      clearTimeout(expireTimeout.current);
    };
  }, [status]);

  return (
    <CustomModal showModal={showLoading}>
      <ActivityIndicator size='large' />
    </CustomModal>
  );
}
