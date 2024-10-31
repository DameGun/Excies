import { useState } from 'react';
import { Button, Keyboard, TextInput, View } from 'react-native';

import { Entypo, Feather } from '@expo/vector-icons';

import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';

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
      <View style={clicked ? styles.searchBar_clicked : styles.searchBar_unclicked}>
        <Feather name='search' size={20} color='white' style={clicked && styles.iconLeft_clicked} />
        <TextInput
          placeholder='Search'
          style={clicked ? styles.input_clicked : styles.input}
          placeholderTextColor={styles.placeholderTextColor.color}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={handleFocus}
        />
        {clicked && (
          <Entypo
            name='cross'
            size={20}
            color='white'
            style={styles.iconRight_clicked}
            onPress={handleReset}
          />
        )}
      </View>
      {clicked && (
        <View>
          <Button title='Cancel' color={styles.buttonColor.color} onPress={handleCancel} />
        </View>
      )}
    </View>
  );
}
