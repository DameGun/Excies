import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import {
  LoadingState,
  MAX_REQUEST_WAITING_EXPIRE_TIME,
  MIN_REQUEST_WAITING_EXPIRE_TIME,
} from '@/constants/loading';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectShowLoading, selectStatus, setShowLoading, setStatus } from '@/redux/slices/loading';

import { CustomModal } from '../Modal';

export function Loader() {
  const status = useAppSelector(selectStatus);
  const showLoading = useAppSelector(selectShowLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let expireTimeout: NodeJS.Timeout;
    let minTimeout: NodeJS.Timeout;

    if (status === LoadingState.Loading) {
      expireTimeout = setTimeout(() => {
        dispatch(
          setStatus({ status: LoadingState.Failed, errorMessage: 'Request waiting time exceeded' })
        );
      }, MAX_REQUEST_WAITING_EXPIRE_TIME);

      minTimeout = setTimeout(() => {
        dispatch(setShowLoading(true));
      }, MIN_REQUEST_WAITING_EXPIRE_TIME);
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
