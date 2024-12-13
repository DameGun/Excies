import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Platform } from 'react-native';

import { LoadingState } from '@/constants/loading';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import {
  selectErrorMessage,
  selectStatus,
  selectStatusCode,
  setStatus,
} from '@/redux/slices/loading';

export function Error() {
  const { t } = useTranslation();
  const status = useAppSelector(selectStatus);
  const errorMessage = useAppSelector(selectErrorMessage);
  const statusCode = useAppSelector(selectStatusCode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === LoadingState.Failed) {
      dispatch(setStatus({ status: LoadingState.Idle }));

      if (statusCode === 401) return;

      if (Platform.OS === 'web') {
        alert(errorMessage);
      } else {
        Alert.alert(t('errors.title'), errorMessage, [
          {
            text: t('errors.button'),
            style: 'cancel',
          },
        ]);
      }
    }
  }, [status]);

  return null;
}
