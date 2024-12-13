import { useTranslation } from 'react-i18next';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icons } from '@/constants/icons';
import { useGetBottomTabOptions } from '@/hooks/useGetBottomTabOptions';
import { LoginScreen, RegisterScreen } from '@/screens';

const Tab = createBottomTabNavigator();

export function AuthTabs() {
  const bottomTabOptions = useGetBottomTabOptions();
  const { t } = useTranslation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={t('tabs.login')}
        component={LoginScreen}
        options={bottomTabOptions(t('tabs.login'), Icons.Login)}
      />
      <Tab.Screen
        name={t('tabs.register')}
        component={RegisterScreen}
        options={bottomTabOptions(t('tabs.register'), Icons.Register)}
      />
    </Tab.Navigator>
  );
}
