import { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { Error, Loader } from '@/components';
import { DARK_THEME, LIGHT_THEME } from '@/constants/theme';
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
  const theme = colorMode === 'dark' ? DARK_THEME : LIGHT_THEME;

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
