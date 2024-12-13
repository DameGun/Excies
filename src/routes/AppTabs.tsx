import { useTranslation } from 'react-i18next';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icons } from '@/constants/icons';
import { useGetBottomTabOptions } from '@/hooks/useGetBottomTabOptions';

import { HomeStack } from './HomeStack';
import { SettingsStack } from './SettingsStack';

const Tab = createBottomTabNavigator();

export function AppTabs() {
  const bottomTabOptions = useGetBottomTabOptions();
  const { t } = useTranslation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={t('tabs.home')}
        component={HomeStack}
        options={bottomTabOptions(t('tabs.home'), Icons.Home)}
      />
      <Tab.Screen
        name={t('tabs.settings')}
        component={SettingsStack}
        options={bottomTabOptions(t('tabs.settings'), Icons.Settings)}
      />
    </Tab.Navigator>
  );
}
