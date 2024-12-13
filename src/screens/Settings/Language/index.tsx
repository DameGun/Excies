import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { CustomFlatList, ListItem } from '@/components';
import { Icons } from '@/constants/icons';
import { LanguagesData } from '@/constants/language';
import { StorageItemsKeys } from '@/constants/token';
import { useStyles } from '@/hooks/useStyles';
import type { LanguageDataType } from '@/types/i18n';
import { setStorageItem } from '@/utils/storage';

import { getStyles } from './styles';

export function LanguageScreen() {
  const { i18n } = useTranslation();
  const styles = useStyles(getStyles);

  const handlePress = async ({ code }: LanguageDataType) => {
    await setStorageItem(StorageItemsKeys.Language, code);
    i18n.changeLanguage(code);
  };

  return (
    <CustomFlatList
      data={LanguagesData}
      renderItem={({ item, ...rest }) => (
        <ListItem
          {...rest}
          item={item}
          iconName={Icons.Checkbox}
          iconHidden={item.code !== i18n.language}
          onPress={handlePress}
          extractTitle={({ name, originName }) => (
            <View style={styles.languageItem}>
              <Text style={styles.englishName}>{name}</Text>
              <Text style={styles.originName}>{originName}</Text>
            </View>
          )}
        />
      )}
    />
  );
}
