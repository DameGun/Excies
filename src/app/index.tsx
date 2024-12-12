import { StatusBarColor, Theme } from '@/constants/theme';
import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { selectIsLoggedIn } from '@/redux/slices/auth';
import { thunkAppOpen } from '@/redux/slices/auth/thunks';
import { selectCurrentColorMode } from '@/redux/slices/theme';
import { Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

export default function Index() {
  const colorMode = useAppSelector(selectCurrentColorMode);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(thunkAppOpen());
  }, []);

  return (
    <>
      <StatusBar
        style={StatusBarColor[colorMode]}
        backgroundColor={Theme[colorMode].colors.background}
      />
      {isLoggedIn ? <Redirect href='/home' /> : <Redirect href='auth/login' />}
    </>
  );
}
