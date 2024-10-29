import { useMemo } from 'react';
import { Pressable, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

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
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.6 : 1,
          },
          styles.itemContainer,
        ]}
        onPress={onRemove}
      >
        <Feather name='delete' size={22} style={styles.text} />
      </Pressable>
    </View>
  );
}
