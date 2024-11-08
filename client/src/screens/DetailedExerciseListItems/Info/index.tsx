import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CustomTextInput } from '@/components';
import { DeleteItemButton } from '@/components/DeleteItemButton';
import { ScreenNames } from '@/constants/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useStyles } from '@/hooks/useStyles';
import { selectDetailedExerciseListItemById } from '@/redux/slices/detailedExerciseListItems';
import {
  thunkDeleteDetailedExerciseListItem,
  thunkUpdateDetailedExerciseListItem,
} from '@/redux/slices/detailedExerciseListItems/thunks';
import {
  DeleteDetailedExerciseListItemDTO,
  UpdateDetailedExerciseListItemDTO,
} from '@/types/detailedExerciseListItem';
import { StackNavigationParams } from '@/types/navigation';
import { getInfoModalScreenStylesDefault } from '@/utils/getInfoModalScreenStylesDefault';
import { getModalHeaderScreenOption } from '@/utils/getModalHeaderScreenOption';

import { detailedExerciseListItemSchema } from './validation';

type DetailedExerciseListItemInfoModalScreenProps = NativeStackScreenProps<
  StackNavigationParams,
  ScreenNames.DetailedExerciseListItemInfoModalScreen
>;

export function DetailedExerciseListItemInfoModalScreen({
  route,
  navigation,
}: DetailedExerciseListItemInfoModalScreenProps) {
  const { username, list_id, list_item_id, detailed_id } = route.params;
  const item = useAppSelector((state) => selectDetailedExerciseListItemById(state, detailed_id));
  const styles = useStyles(getInfoModalScreenStylesDefault);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      rep: item?.rep,
      weight: item?.weight,
      notes: item?.notes ?? '',
    },
    resolver: yupResolver(detailedExerciseListItemSchema),
  });

  useEffect(() => {
    navigation.setOptions(
      getModalHeaderScreenOption({
        onPress: onSubmit,
        title: 'Edit Set',
        disabled: !isValid,
      })
    );
  }, [isValid]);

  const onSubmit = handleSubmit(({ rep, weight, notes }) => {
    const payload: UpdateDetailedExerciseListItemDTO = {
      username,
      list_id,
      list_item_id,
      id: detailed_id,
      detailed_exercise_list_item: { rep, weight, notes },
    };

    dispatch(thunkUpdateDetailedExerciseListItem(payload));
    navigation.goBack();
  });

  function handleDelete() {
    const payload: DeleteDetailedExerciseListItemDTO = {
      username,
      list_id,
      list_item_id,
      id: detailed_id,
    };

    dispatch(thunkDeleteDetailedExerciseListItem(payload));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Notes</Text>
        <CustomTextInput name='notes' control={control} placeholder='Comment' />
      </View>
      <View>
        <Text style={styles.text}>Repetitions</Text>
        <CustomTextInput
          name='rep'
          control={control}
          keyboardType='number-pad'
          inputMode='numeric'
          placeholder='Repetitions'
        />
      </View>
      <View>
        <Text style={styles.text}>Weight (kg)</Text>
        <CustomTextInput
          name='weight'
          control={control}
          keyboardType='number-pad'
          inputMode='decimal'
          placeholder='Weight'
        />
        <DeleteItemButton onPress={handleDelete} />
      </View>
    </View>
  );
}
