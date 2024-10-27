import { Button, Keyboard, TextInput, View } from 'react-native';

import { Entypo, Feather } from '@expo/vector-icons';

import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';

type SearchProps = {
  clicked: boolean;
  searchPhrase: string;
  setClicked(value: boolean): void;
  setSearchPhrase(value: string): void;
};

export function Search({ clicked, searchPhrase, setSearchPhrase, setClicked }: SearchProps) {
  const styles = useStyles(getStyles);

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
