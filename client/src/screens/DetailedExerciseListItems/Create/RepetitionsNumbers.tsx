import { useMemo } from 'react';
import { Pressable, Text } from 'react-native';

import { NumberInputButton } from '@/components';
import {
  CreateDetailedExerciseListItemParameterType,
  ItemValueOperationType,
} from '@/constants/detailedExerciseListItem';
import { useStyles } from '@/hooks/useStyles';
import { DetailedOperationType } from '@/types/detailedExerciseListItem';
import { handleInputButtonForRepetitions } from '@/utils/detailedExerciseListItemOperations';

import { getStyles } from './styles';

type RepetitionsNumbersProps = {
  isActive: boolean;
  setParameterType(type: CreateDetailedExerciseListItemParameterType): void;
  handleRepetitions(rep: number): void;
  rep: number;
};

export function RepetitionsNumbers({
  isActive,
  setParameterType,
  handleRepetitions,
  rep,
}: RepetitionsNumbersProps) {
  const styles = useStyles(getStyles);

  const conditionalStyles = useMemo(
    () => ({
      borderColor: isActive ? styles.primaryColor.color : styles.greyColor.color,
    }),
    [isActive]
  );

  const handleParameterType = () => {
    setParameterType(CreateDetailedExerciseListItemParameterType.Repetitions);
  };

  const handleRepetitionsInputButtonClick = (data: DetailedOperationType) => {
    handleRepetitions(handleInputButtonForRepetitions(data, rep));
  };

  return (
    <Pressable onPress={handleParameterType} style={[styles.input, conditionalStyles]}>
      <NumberInputButton
        type={ItemValueOperationType.Decrease}
        number={1}
        showOperator={true}
        onPress={handleRepetitionsInputButtonClick}
      />
      <Text style={styles.inputTitle}>{rep} rep</Text>
      <NumberInputButton
        type={ItemValueOperationType.Increase}
        number={1}
        showOperator={true}
        onPress={handleRepetitionsInputButtonClick}
      />
    </Pressable>
  );
}
