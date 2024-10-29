import { useCallback, useMemo, useState } from 'react';
import { Text, View } from 'react-native';

import { FontAwesome6 } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CustomButton, NumbersInput } from '@/components';
import { CreateDetailedExerciseListItemParameterType } from '@/constants/detailedExerciseListItem';
import { ScreenNames } from '@/constants/navigation';
import { useAppDispatch } from '@/hooks/redux';
import { useStyles } from '@/hooks/useStyles';
import { thunkCreateDetailedExerciseListItem } from '@/redux/slices/detailedExerciseListItems/thunks';
import { CreateDetailedExerciseListItemDTO } from '@/types/detailedExerciseListItem';
import { StackNavigationParams } from '@/types/navigation';
import {
  handleRemoveRepetitions,
  handleRemoveWeight,
  handleRepetitonsNumberPress,
  handleWeightNumberPress,
} from '@/utils/detailedExerciseListItemOperations';

import { RepetitionsNumbers } from './RepetitionsNumbers';
import { getStyles } from './styles';
import { WeightNumbers } from './WeightNumbers';

type CreateDetailedItemModalScreenProps = NativeStackScreenProps<
  StackNavigationParams,
  ScreenNames.CreateDetailedItemModalScreen
>;

export default function CreateDetailedItemModalScreen({
  route,
  navigation,
}: CreateDetailedItemModalScreenProps) {
  const { username, list_id, list_item_id } = route.params;
  const styles = useStyles(getStyles);
  const dispatch = useAppDispatch();

  const [active, setActive] = useState(CreateDetailedExerciseListItemParameterType.Repetitions);
  const [rep, setRep] = useState(0);
  const [weight, setWeight] = useState(0);

  const currentIconName = useMemo(
    () =>
      active === CreateDetailedExerciseListItemParameterType.Weight ? 'weight-hanging' : 'repeat',
    [active]
  );

  const onNumberPress = useCallback(
    (number: number) => {
      if (active === CreateDetailedExerciseListItemParameterType.Repetitions) {
        setRep(handleRepetitonsNumberPress(number, rep));
      } else {
        setWeight(handleWeightNumberPress(number, weight));
      }
    },
    [active, rep, weight]
  );

  const onRemove = useCallback(() => {
    if (active === CreateDetailedExerciseListItemParameterType.Repetitions) {
      setRep(handleRemoveRepetitions(rep));
    } else {
      setWeight(handleRemoveWeight(weight));
    }
  }, [active, rep, weight]);

  function handleSubmit() {
    if (rep && weight) {
      const payload: CreateDetailedExerciseListItemDTO = {
        username,
        list_id,
        list_item_id,
        detailed_exercise_list_item: {
          time: new Date().toISOString(),
          rep,
          weight,
        },
      };

      dispatch(thunkCreateDetailedExerciseListItem(payload));
      navigation.goBack();
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}></View>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <FontAwesome6 name={currentIconName} size={14} color={styles.primaryColor} />
          <Text style={styles.header}>{active}</Text>
        </View>
        <View style={styles.inputsContainer}>
          <RepetitionsNumbers
            isActive={active === CreateDetailedExerciseListItemParameterType.Weight}
            handleRepetitions={setRep}
            rep={rep}
            setParameterType={setActive}
          />
          <WeightNumbers
            isActive={active === CreateDetailedExerciseListItemParameterType.Weight}
            handleWeight={setWeight}
            weight={weight}
            setParameterType={setActive}
          />
        </View>
        <CustomButton
          textStyle={styles.submitButtonText}
          buttonStyle={styles.submitButton}
          onPress={handleSubmit}
        >
          Record Set
        </CustomButton>
        <View style={styles.numberButtonsContainer}>
          <NumbersInput onNumberPress={onNumberPress} onRemove={onRemove} />
        </View>
      </View>
    </View>
  );
}
