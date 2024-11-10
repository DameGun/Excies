import { useTranslation } from 'react-i18next';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icons } from '@/constants/icons';
import { useStyles } from '@/hooks/useStyles';
import { getBottomTabOptions, getBottomTabStyles } from '@/utils/getBottomTabOptions';

import { HomeStack } from './HomeStack';
import { SettingsStack } from './SettingsStack';

const Tab = createBottomTabNavigator();

export function AppTabs() {
  const styles = useStyles(getBottomTabStyles);
  const { t } = useTranslation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={t('tabs.home')}
        component={HomeStack}
        options={getBottomTabOptions(styles, Icons.Home)}
      />
      <Tab.Screen
        name={t('tabs.settings')}
        component={SettingsStack}
        options={getBottomTabOptions(styles, Icons.Settings)}
      />
    </Tab.Navigator>
  );
}
