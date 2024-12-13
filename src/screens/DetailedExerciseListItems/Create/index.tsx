import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CustomButton, NumbersInput } from '@/components';
import {
  CreateDetailedExerciseListItemParameterType,
  WeightMeasurementSystemType,
} from '@/constants/detailedExerciseListItem';
import type { SupportedLanguageCodes } from '@/constants/i18n';
import type { HomeScreenNames } from '@/constants/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useStyles } from '@/hooks/useStyles';
import { thunkCreateDetailedExerciseListItem } from '@/redux/slices/detailedExerciseListItems/thunks';
import { selectIsUserChoosedMetricSystem } from '@/redux/slices/user';
import type { CreateDetailedExerciseListItemDTO } from '@/types/detailedExerciseListItem';
import type { HomeStackNavigationParams } from '@/types/homeStackNavigation';
import {
  handleRemoveRepetitions,
  handleRemoveWeight,
  handleRepetitonsNumberPress,
  handleWeightNumberPress,
} from '@/utils/detailedExerciseListItemOperations';
import { convertKgToLbs, convertLbsToKg } from '@/utils/weightMeasure';

import { CreateDetailedExerciseListItemHeader } from './Header';
import { RepetitionsNumbers, WeightNumbers } from './Inputs';
import { getStyles } from './styles';

type CreateDetailedItemModalScreenProps = NativeStackScreenProps<
  HomeStackNavigationParams,
  HomeScreenNames.CreateDetailedItemModalScreen
>;

export function CreateDetailedItemModalScreen({
  route,
  navigation,
}: CreateDetailedItemModalScreenProps) {
  const { listId, listItemId } = route.params;
  const styles = useStyles(getStyles);
  const dispatch = useAppDispatch();
  const isMetricSystemChoosed = useAppSelector(selectIsUserChoosedMetricSystem);
  const { t, i18n } = useTranslation();

  const [activeParameter, setActiveParameter] = useState(
    CreateDetailedExerciseListItemParameterType.Repetitions
  );
  const [activeWeightSystem, setActiveWeightSystem] = useState(
    isMetricSystemChoosed ? WeightMeasurementSystemType.Kg : WeightMeasurementSystemType.Lbs
  );
  const [rep, setRep] = useState(0);
  const [weight, setWeight] = useState(0);

  const isValid = useMemo(() => rep > 0 && weight > 0, [rep, weight]);

  const onNumberPress = useCallback(
    (number: number) => {
      if (activeParameter === CreateDetailedExerciseListItemParameterType.Repetitions) {
        setRep(handleRepetitonsNumberPress(number, rep));
      } else {
        setWeight(handleWeightNumberPress(number, weight));
      }
    },
    [activeParameter, rep, weight]
  );

  const onRemove = useCallback(() => {
    if (activeParameter === CreateDetailedExerciseListItemParameterType.Repetitions) {
      setRep(handleRemoveRepetitions(rep));
    } else {
      setWeight(handleRemoveWeight(weight));
    }
  }, [activeParameter, rep, weight]);

  const handleActiveWeightSystem = (value: WeightMeasurementSystemType) => {
    setActiveWeightSystem(value);

    const convertedWeight =
      value === WeightMeasurementSystemType.Kg ? convertLbsToKg(weight) : convertKgToLbs(weight);
    setWeight(convertedWeight);
  };

  function handleSubmit() {
    const language = i18n.language as SupportedLanguageCodes;
    const convertedWeight =
      activeWeightSystem === WeightMeasurementSystemType.Lbs ? convertLbsToKg(weight) : weight;

    const currentDate = new Date();
    const time = currentDate.toTimeString().split(' ')[0];
    const date = currentDate.toISOString().split('T')[0];

    const payload: CreateDetailedExerciseListItemDTO = {
      listId,
      listItemId,
      detailedExerciseListItem: {
        date,
        time,
        rep,
        weight: convertedWeight,
      },
      language,
    };

    dispatch(thunkCreateDetailedExerciseListItem(payload));
    navigation.goBack();
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Pressable style={styles.overlay} onPress={navigation.goBack} />
      </View>
      <View style={styles.container}>
        <CreateDetailedExerciseListItemHeader
          activeParameter={activeParameter}
          activeWeightSystem={activeWeightSystem}
          onWeightSystemClick={handleActiveWeightSystem}
        />
        <View style={styles.inputsContainer}>
          <RepetitionsNumbers
            isActive={activeParameter === CreateDetailedExerciseListItemParameterType.Repetitions}
            handleRepetitions={setRep}
            rep={rep}
            setParameterType={setActiveParameter}
          />
          <WeightNumbers
            isActive={activeParameter === CreateDetailedExerciseListItemParameterType.Weight}
            activeWeightSystem={activeWeightSystem}
            handleWeight={setWeight}
            weight={weight}
            setParameterType={setActiveParameter}
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
