import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { thunkLogout } from '@/redux/slices/auth/thunks';
import type { IconNames } from '@/types/icons';
import type { AppDispatch } from '@/types/redux';
import type { SettingsStackNavigationParams } from '@/types/settingsStackNavigation';

import { SettingsScreenNames } from './navigation';

export enum SettingsItems {
  Language = 'language',
  Logout = 'logout',
}

export const settingsItemsData = (
  dispatch: AppDispatch,
  navigation: NativeStackNavigationProp<
    SettingsStackNavigationParams,
    SettingsScreenNames.SettingsScreen,
    undefined
  >
) => [
  {
    id: SettingsItems.Language,
    name: SettingsItems.Language,
    onPress: () => navigation.navigate(SettingsScreenNames.LanguageScreen),
  },
  {
    id: SettingsItems.Logout,
    name: SettingsItems.Logout,
    onPress: () => dispatch(thunkLogout()),
  },
];

export const SettingsItemsIcons: Record<SettingsItems, IconNames> = {
  [SettingsItems.Language]: 'earth',
  [SettingsItems.Logout]: 'logout',
};
