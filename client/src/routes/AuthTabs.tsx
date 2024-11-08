import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useStyles } from '@/hooks/useStyles';
import { LoginScreen, RegisterScreen } from '@/screens';
import { getBottomTabOptions, getBottomTabStyles } from '@/utils/getBottomTabOptions';
import {
  getCommonHeaderScreenOptions,
  getCommonHeaderScreenStyles,
} from '@/utils/getCommonHeaderScreenOptions';

const Tab = createBottomTabNavigator();

export function AuthTabs() {
  const styles = useStyles(getCommonHeaderScreenStyles, getBottomTabStyles);

  return (
    <Tab.Navigator screenOptions={getCommonHeaderScreenOptions(styles)}>
      <Tab.Screen
        name='Login'
        component={LoginScreen}
        options={getBottomTabOptions(styles, 'login')}
      />
      <Tab.Screen
        name='Register'
        component={RegisterScreen}
        options={getBottomTabOptions(styles, 'account-plus')}
      />
    </Tab.Navigator>
  );
}
