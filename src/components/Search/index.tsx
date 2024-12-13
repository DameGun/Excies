import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Icons } from '@/constants/icons';
import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';

import { CustomButton } from '../Button';

type SearchProps = {
  searchPhrase: string;
  setSearchPhrase(value: string): void;
};

export function Search({ searchPhrase, setSearchPhrase }: SearchProps) {
  const styles = useStyles(getStyles);
  const [isFocused, setIsFocused] = useState(false);
  const { t } = useTranslation();

  const handleFocus = () => setIsFocused(true);

  const handleReset = () => setSearchPhrase('');

  const handleCancel = () => setIsFocused(false);

  return (
    <View style={styles.container}>
      <View style={[styles.searchBar, isFocused && styles.searchBarClicked]}>
        <MaterialCommunityIcons name={Icons.Search} style={styles.searchIcon} />
        <TextInput
          placeholder={t('search.placeholder')}
          style={styles.input}
          placeholderTextColor={styles.placeholder.color}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={handleFocus}
          onBlur={handleCancel}
        />
        {searchPhrase.length > 0 && (
          <MaterialCommunityIcons
            name={Icons.Close}
            style={styles.clearIcon}
            onPress={handleReset}
          />
        )}
      </View>
      {isFocused && (
        <View>
          <CustomButton onPress={handleCancel}>{t('search.cancel')}</CustomButton>
        </View>
      )}
    </View>
  );
}
