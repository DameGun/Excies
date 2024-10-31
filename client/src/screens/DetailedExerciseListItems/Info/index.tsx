import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CustomButton, CustomTextInput } from '@/components';
import { ScreenNames } from '@/constants/navigation';
import { useAppDispatch } from '@/hooks/redux';
import { useStyles } from '@/hooks/useStyles';
import {
  thunkDeleteDetailedExerciseListItem,
  thunkUpdateDetailedExerciseListItem,
} from '@/redux/slices/detailedExerciseListItems/thunks';
import {
  DeleteDetailedExerciseListItemDTO,
  UpdateDetailedExerciseListItemDTO,
} from '@/types/detailedExerciseListItem';
import { StackNavigationParams } from '@/types/navigation';
import { getModalHeaderScreenOption } from '@/utils/getModalHeaderScreenOption';

import { getStyles } from './styles';
import { detailedExerciseListItemSchema } from './validation';

type DetailedExerciseListItemInfoModalScreenProps = NativeStackScreenProps<
  StackNavigationParams,
  ScreenNames.DetailedExerciseListItemInfoModalScreen
>;

export function DetailedExerciseListItemInfoModalScreen({
  route,
  navigation,
}: DetailedExerciseListItemInfoModalScreenProps) {
  const { username, list_id, list_item_id, item } = route.params;
  const styles = useStyles(getStyles);
  const dispatch = useAppDispatch();
  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      rep: item.rep,
      weight: item.weight,
      notes: item.notes,
    },
    resolver: yupResolver(detailedExerciseListItemSchema),
  });

  useEffect(() => {
    navigation.setOptions(
      getModalHeaderScreenOption({
        color: styles.headerButtonColor,
        onPress: onSubmit,
        title: 'Edit Set',
      })
    );
  }, []);

  const onSubmit = handleSubmit(({ rep, weight, notes }) => {
    const payload: UpdateDetailedExerciseListItemDTO = {
      username,
      list_id,
      list_item_id,
      id: item.id,
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
      id: item.id,
    };

    dispatch(thunkDeleteDetailedExerciseListItem(payload));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Notes</Text>
        <CustomTextInput
          name='notes'
          control={control}
          placeholder='Comment'
          style={styles.input}
        />
      </View>
      <View style={{ ...styles.inputContainer, marginTop: 10 }}>
        <Text style={styles.text}>Repetitions</Text>
        <CustomTextInput
          name='rep'
          control={control}
          style={styles.input}
          keyboardType='number-pad'
          inputMode='numeric'
        />
      </View>
      <View style={{ ...styles.inputContainer, marginTop: 10 }}>
        <Text style={styles.text}>Weight (kg)</Text>
        <CustomTextInput
          name='weight'
          control={control}
          style={styles.input}
          keyboardType='number-pad'
          inputMode='decimal'
        />
        <CustomButton
          textStyle={styles.deleteButtonText}
          buttonStyle={styles.deleteButton}
          iconComponent={<FontAwesome name='trash-o' size={20} color='red' />}
          onPress={handleDelete}
        >
          Delete
        </CustomButton>
      </View>
    </View>
  );
}
