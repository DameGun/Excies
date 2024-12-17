import { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer, Theme as RNTheme } from '@react-navigation/native';

import { Error, Loader } from '@/components';
import { StatusBarColor, Theme } from '@/constants/theme';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectIsLoggedIn } from '@/redux/slices/auth';
import { thunkAppOpen } from '@/redux/slices/auth/thunks';
import { selectCurrentColorMode } from '@/redux/slices/theme';

import { AppTabs } from './AppTabs';
import { AuthTabs } from './AuthTabs';

import '@/i18n';

export function Router() {
  const colorMode = useAppSelector(selectCurrentColorMode);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(thunkAppOpen());
  }, []);

  return (
    <NavigationContainer theme={Theme[colorMode] as unknown as RNTheme}>
      <StatusBar
        barStyle={StatusBarColor[colorMode]}
        backgroundColor={Theme[colorMode].colors.background}
      />
      {isLoggedIn ? <AppTabs /> : <AuthTabs />}
      <Loader />
      <Error />
    </NavigationContainer>
  );
}
