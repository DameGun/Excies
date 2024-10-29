import { useEffect, useRef } from 'react';
import { ActivityIndicator } from 'react-native';

import {
  LoadingState,
  MAX_REQUEST_WAITING_EXPIRE_TIME,
  MIN_REQUEST_WAITING_EXPIRE_TIME,
} from '@/constants/loading';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setShowLoading, setStatus } from '@/redux/slices/loading';

import { CustomModal } from '../Modal';

export function Loader() {
  const { status, showLoading } = useAppSelector((state) => state.loading);
  const dispatch = useAppDispatch();
  const stateRef = useRef(status);

  useEffect(() => {
    const expireTimeout = setTimeout(() => {
      if (stateRef.current === 'loading') {
        dispatch(
          setStatus({ status: LoadingState.Failed, errorMessage: 'Request waiting time exceeded' })
        );
      }
    }, MAX_REQUEST_WAITING_EXPIRE_TIME);

    const minTimeout = setTimeout(() => {
      if (stateRef.current === 'loading') {
        dispatch(setShowLoading(true));
      }
    }, MIN_REQUEST_WAITING_EXPIRE_TIME);

    return () => {
      clearTimeout(expireTimeout);
      clearTimeout(minTimeout);
    };
  }, [status, dispatch]);

  useEffect(() => {
    stateRef.current = status;
  }, [status]);

  return (
    <CustomModal showModal={showLoading}>
      <ActivityIndicator color='#999999' size='large' />
    </CustomModal>
  );
}
