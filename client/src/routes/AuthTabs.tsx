import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <Tab.Navigator screenOptions={getCommonHeaderScreenOptions(styles)}>
      <Tab.Screen
        name={t('tabs.login')}
        component={LoginScreen}
        options={getBottomTabOptions(styles, 'login')}
      />
      <Tab.Screen
        name={t('tabs.register')}
        component={RegisterScreen}
        options={getBottomTabOptions(styles, 'account-plus')}
      />
    </Tab.Navigator>
  );
}
