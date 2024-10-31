import { Pressable, Text } from 'react-native';

import { ItemValueOperationType } from '@/constants/detailedExerciseListItem';
import { useStyles } from '@/hooks/useStyles';
import { DetailedOperationType } from '@/types/detailedExerciseListItem';
import { PressableProps } from '@/types/pressable';

import { getStyles } from './styles';

type NumberInputButtonProps = PressableProps<DetailedOperationType> & {
  type: ItemValueOperationType;
  number: number;
  showOperator: boolean;
};

export function NumberInputButton({ type, number, showOperator, onPress }: NumberInputButtonProps) {
  const styles = useStyles(getStyles);

  const handlePress = () => {
    onPress?.({ type, number });
  };

  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.6 : 1,
        },
        styles.inputButton,
      ]}
      onPress={handlePress}
    >
      <Text
        style={
          type === ItemValueOperationType.Increase
            ? styles.inputButtonNumber
            : styles.inputButtonText
        }
      >
        {type === ItemValueOperationType.Increase ? number : showOperator && '-'}
      </Text>
      <Text
        style={
          type === ItemValueOperationType.Increase
            ? styles.inputButtonText
            : styles.inputButtonNumber
        }
      >
        {type === ItemValueOperationType.Increase ? showOperator && '+' : number}
      </Text>
    </Pressable>
  );
}
