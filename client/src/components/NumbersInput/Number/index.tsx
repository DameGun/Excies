import { Pressable, Text } from 'react-native';

import { useStyles } from '@/hooks/useStyles';
import { PressableProps } from '@/types/pressable';

import { getStyles } from '../styles';

type NumberProps = PressableProps<number> & {
  number: number;
};

export function Number({ onPress, number }: NumberProps) {
  const styles = useStyles(getStyles);

  const handlePress = () => onPress?.(number);

  return (
    <Pressable style={styles.itemContainer} onPress={handlePress}>
      <Text style={styles.text}>{number}</Text>
    </Pressable>
  );
}
