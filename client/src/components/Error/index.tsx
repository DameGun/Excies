import { useEffect } from 'react';
import { Alert } from 'react-native';

import { LoadingState } from '@/constants/loading';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setStatus } from '@/redux/slices/loading';

export function Error() {
  const { status, errorMessage } = useAppSelector((state) => state.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === LoadingState.Failed) {
      Alert.alert('Error', errorMessage, [
        {
          text: 'Cancel',
          onPress: () => {
            dispatch(setStatus({ status: LoadingState.Idle }));
          },
          style: 'cancel',
        },
      ]);
    }
  }, [status]);

  return null;
}
