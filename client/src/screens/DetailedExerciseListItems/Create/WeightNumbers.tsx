import { useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';

import { NumberInputButton } from '@/components';
import {
  CreateDetailedExerciseListItemParameterType,
  ItemValueOperationType,
} from '@/constants/detailedExerciseListItem';
import { useStyles } from '@/hooks/useStyles';
import { DetailedOperationType } from '@/types/detailedExerciseListItem';
import { handleInputButtonForWeight } from '@/utils/detailedExerciseListItemOperations';

import { getStyles } from './styles';

type WeightNumbersProps = {
  isActive: boolean;
  setParameterType(type: CreateDetailedExerciseListItemParameterType): void;
  handleWeight(weight: number): void;
  weight: number;
};

export function WeightNumbers({
  isActive,
  setParameterType,
  handleWeight,
  weight,
}: WeightNumbersProps) {
  const styles = useStyles(getStyles);

  const conditionalStyles = useMemo(
    () => ({
      borderColor: isActive ? styles.primaryColor.color : styles.greyColor.color,
    }),
    [isActive]
  );

  const handleParameterType = () => {
    setParameterType(CreateDetailedExerciseListItemParameterType.Weight);
  };

  const handleWeightInputButtonClick = (data: DetailedOperationType) => {
    handleWeight(handleInputButtonForWeight(data, weight));
  };

  return (
    <Pressable onPress={handleParameterType} style={[styles.input, conditionalStyles]}>
      <View style={styles.inputButtonsContainer}>
        <NumberInputButton
          type={ItemValueOperationType.Decrease}
          number={5}
          showOperator={true}
          onPress={handleWeightInputButtonClick}
        />
        <NumberInputButton
          type={ItemValueOperationType.Decrease}
          number={1}
          showOperator={false}
          onPress={handleWeightInputButtonClick}
        />
      </View>
      <Text style={styles.inputTitle}>{weight} kg</Text>
      <View style={styles.inputButtonsContainer}>
        <NumberInputButton
          type={ItemValueOperationType.Increase}
          number={1}
          showOperator={false}
          onPress={handleWeightInputButtonClick}
        />
        <NumberInputButton
          type={ItemValueOperationType.Increase}
          number={5}
          showOperator={true}
          onPress={handleWeightInputButtonClick}
        />
      </View>
    </Pressable>
  );
}
