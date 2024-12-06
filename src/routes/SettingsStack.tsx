import { useTranslation } from 'react-i18next';

import { createStackNavigator } from '@react-navigation/stack';

import { SettingsScreenNames } from '@/constants/navigation';
import { LanguageScreen } from '@/screens/Settings/Language';
import { SettingsScreen } from '@/screens/Settings';
import type { SettingsStackNavigationParams } from '@/types/settingsStackNavigation';

const Stack = createStackNavigator<SettingsStackNavigationParams>();

export function SettingsStack() {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SettingsScreenNames.SettingsScreen}
        options={{
          headerTitle: t('tabs.settings'),
        }}
        component={SettingsScreen}
      />
      <Stack.Screen
        name={SettingsScreenNames.LanguageScreen}
        options={{
          headerTitle: t('settings.language'),
        }}
        component={LanguageScreen}
      />
    </Stack.Navigator>
  );
}
