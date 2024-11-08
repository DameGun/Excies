import { useMemo } from 'react';
import { Pressable, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useStyles } from '@/hooks/useStyles';

import { Number } from './Number';
import { getStyles } from './styles';

type NumbersInputProps = {
  onNumberPress(value: number): void;
  onRemove: VoidFunction;
};

export function NumbersInput({ onNumberPress, onRemove }: NumbersInputProps) {
  const styles = useStyles(getStyles);

  const numbers = useMemo(
    () =>
      [...Array(9).keys()].map((num) => (
        <Number key={num} number={num + 1} onPress={onNumberPress} />
      )),
    [onNumberPress]
  );

  return (
    <View style={styles.container}>
      {numbers}
      <Number number={0} onPress={onNumberPress} />
      <Pressable style={styles.itemContainer} onPress={onRemove}>
        <MaterialCommunityIcons name='delete-outline' style={styles.text} />
      </Pressable>
    </View>
  );
}
