import { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { Error, Loader } from '@/components';
import { DARK_THEME, LIGHT_THEME } from '@/constants/theme';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectIsLoggedIn } from '@/redux/slices/auth';
import { thunkAppOpen } from '@/redux/slices/auth/thunks';

import { AppTabs } from './AppTabs';
import { AuthTabs } from './AuthTabs';

import '@/i18n';

export function Router() {
  const theme = useColorScheme() === 'dark' ? DARK_THEME : LIGHT_THEME;
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(thunkAppOpen());
  }, []);

  return (
    <NavigationContainer theme={theme as any}>
      <StatusBar
        barStyle={theme === DARK_THEME ? 'light-content' : 'dark-content'}
        backgroundColor={theme === DARK_THEME ? 'black' : 'white'}
      />
      {!isLoggedIn ? <AuthTabs /> : <AppTabs />}
      <Loader />
      <Error />
    </NavigationContainer>
  );
}
