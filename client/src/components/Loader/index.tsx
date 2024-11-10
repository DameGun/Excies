import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import {
  LoadingState,
  MAX_REQUEST_WAITING_EXPIRE_TIME,
  MIN_REQUEST_WAITING_EXPIRE_TIME,
} from '@/constants/loading';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectStatus, setStatus } from '@/redux/slices/loading';

import { CustomModal } from '../Modal';

export function Loader() {
  const [showLoading, setShowLoading] = useState(false);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let expireTimeout: NodeJS.Timeout;
    let minTimeout: NodeJS.Timeout;

    if (status === LoadingState.Loading) {
      expireTimeout = setTimeout(() => {
        setShowLoading(false);
        dispatch(
          setStatus({ status: LoadingState.Failed, errorMessage: 'Request waiting time exceeded' })
        );
      }, MAX_REQUEST_WAITING_EXPIRE_TIME);

      minTimeout = setTimeout(() => {
        setShowLoading(true);
      }, MIN_REQUEST_WAITING_EXPIRE_TIME);
    } else {
      setShowLoading(false);
    }

    return () => {
      clearTimeout(expireTimeout);
      clearTimeout(minTimeout);
    };
  }, [status]);

  return (
    <CustomModal showModal={showLoading}>
      <ActivityIndicator size='large' />
    </CustomModal>
  );
}
