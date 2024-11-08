import { useState } from 'react';
import { Keyboard, TextInput, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';

import { CustomButton } from '../Button';

type SearchProps = {
  searchPhrase: string;
  setSearchPhrase(value: string): void;
};

export function Search({ searchPhrase, setSearchPhrase }: SearchProps) {
  const styles = useStyles(getStyles);
  const [clicked, setClicked] = useState(false);

  const handleFocus = () => {
    setClicked(true);
  };

  const handleReset = () => {
    setSearchPhrase('');
  };

  const handleCancel = () => {
    Keyboard.dismiss();
    setClicked(false);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.searchBar, clicked && styles.searchBarClicked]}>
        <MaterialCommunityIcons name='magnify' style={styles.searchIcon} />
        <TextInput
          placeholder='Search'
          style={styles.input}
          placeholderTextColor={styles.placeholder.color}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={handleFocus}
          onBlur={handleCancel}
        />
        {clicked && searchPhrase.length > 0 && (
          <MaterialCommunityIcons name='close' style={styles.clearIcon} onPress={handleReset} />
        )}
      </View>
      {clicked && (
        <View>
          <CustomButton onPress={handleCancel}>Cancel</CustomButton>
        </View>
      )}
    </View>
  );
}
