import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CustomButton, NumbersInput } from '@/components';
import { CreateDetailedExerciseListItemParameterType } from '@/constants/detailedExerciseListItem';
import type { ScreenNames } from '@/constants/navigation';
import { useAppDispatch } from '@/hooks/redux';
import { useStyles } from '@/hooks/useStyles';
import { thunkCreateDetailedExerciseListItem } from '@/redux/slices/detailedExerciseListItems/thunks';
import type { CreateDetailedExerciseListItemDTO } from '@/types/detailedExerciseListItem';
import type { IconNames } from '@/types/icons';
import type { StackNavigationParams } from '@/types/navigation';
import {
  handleRemoveRepetitions,
  handleRemoveWeight,
  handleRepetitonsNumberPress,
  handleWeightNumberPress,
} from '@/utils/detailedExerciseListItemOperations';

import { RepetitionsNumbers, WeightNumbers } from './Inputs';
import { getStyles } from './styles';

type CreateDetailedItemModalScreenProps = NativeStackScreenProps<
  StackNavigationParams,
  ScreenNames.CreateDetailedItemModalScreen
>;

export function CreateDetailedItemModalScreen({
  route,
  navigation,
}: CreateDetailedItemModalScreenProps) {
  const { username, list_id, list_item_id } = route.params;
  const styles = useStyles(getStyles);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [active, setActive] = useState(CreateDetailedExerciseListItemParameterType.Repetitions);
  const [rep, setRep] = useState(0);
  const [weight, setWeight] = useState(0);

  const isValid = useMemo(() => rep > 0 && weight > 0, [rep, weight]);

  const currentIconName = useMemo<IconNames>(
    () =>
      active === CreateDetailedExerciseListItemParameterType.Weight ? 'weight' : 'repeat-variant',
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
  console.log(active);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Pressable style={styles.overlay} onPress={navigation.goBack} />
      </View>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons name={currentIconName} style={styles.createTypeIcon} />
          <Text style={styles.header}>{t(`detailedExerciseListItems.create.${active}Label`)}</Text>
        </View>
        <View style={styles.inputsContainer}>
          <RepetitionsNumbers
            isActive={active === CreateDetailedExerciseListItemParameterType.Repetitions}
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
          disabled={!isValid}
        >
          {t('detailedExerciseListItems.create.submitButton')}
        </CustomButton>
        <NumbersInput onNumberPress={onNumberPress} onRemove={onRemove} />
      </View>
    </View>
  );
}
