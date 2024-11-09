import { useTranslation } from 'react-i18next';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CustomFlatList, ListItem } from '@/components';
import type { SettingsScreenNames } from '@/constants/navigation';
import { settingsItemsData, SettingsItemsIcons } from '@/constants/settings';
import { useAppDispatch } from '@/hooks/redux';
import type { SettingsStackNavigationParams } from '@/types/settingsStackNavigation';

type SettingsScreenProps = NativeStackScreenProps<
  SettingsStackNavigationParams,
  SettingsScreenNames.SettingsScreen
>;

export function SettingsScreen({ navigation }: SettingsScreenProps) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <CustomFlatList
      data={settingsItemsData(dispatch, navigation)}
      renderItem={({ item, ...rest }) => (
        <ListItem
          {...rest}
          item={item}
          iconName={SettingsItemsIcons[item.id]}
          extractTitle={({ name }) => t(`settings.${name}`)}
          onPress={item.onPress}
        />
      )}
    />
  );
}
