import { useTranslation } from 'react-i18next';

import { createStackNavigator } from '@react-navigation/stack';

import { SettingsScreenNames } from '@/constants/navigation';
import { useStyles } from '@/hooks/useStyles';
import { SettingsScreen } from '@/screens/Settings';
import { LanguageScreen } from '@/screens/Settings/Language';
import type { SettingsStackNavigationParams } from '@/types/settingsStackNavigation';
import {
  getCommonHeaderScreenOptions,
  getCommonHeaderScreenStyles,
} from '@/utils/getCommonHeaderScreenOptions';

const Stack = createStackNavigator<SettingsStackNavigationParams>();

export function SettingsStack() {
  const commonScreenStyles = useStyles(getCommonHeaderScreenStyles);
  const { t } = useTranslation();

  return (
    <Stack.Navigator screenOptions={getCommonHeaderScreenOptions(commonScreenStyles)}>
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
