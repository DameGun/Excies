import { useTranslation } from 'react-i18next';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icons } from '@/constants/icons';
import { useStyles } from '@/hooks/useStyles';
import { LoginScreen, RegisterScreen } from '@/screens';
import { getBottomTabOptions, getBottomTabStyles } from '@/utils/getBottomTabOptions';

const Tab = createBottomTabNavigator();

export function AuthTabs() {
  const styles = useStyles(getBottomTabStyles);
  const { t } = useTranslation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={t('tabs.login')}
        component={LoginScreen}
        options={getBottomTabOptions(styles, Icons.Login)}
      />
      <Tab.Screen
        name={t('tabs.register')}
        component={RegisterScreen}
        options={getBottomTabOptions(styles, Icons.Register)}
      />
    </Tab.Navigator>
  );
}
