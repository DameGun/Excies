import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { DeleteItemButton } from '@/components/DeleteItemButton';
import { CustomTextInput } from '@/components/index';
import { ExerciseListActionType } from '@/constants/exerciseList';
import { ScreenNames } from '@/constants/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useStyles } from '@/hooks/useStyles';
import { selectExerciseListById } from '@/redux/slices/exerciseLists';
import {
  thunkCreateExerciseList,
  thunkDeleteExerciseList,
  thunkUpdateExerciseList,
} from '@/redux/slices/exerciseLists/thunks';
import type { UpdateExerciseListDTO } from '@/types/exerciseList';
import type { StackNavigationParams } from '@/types/navigation';
import { getInfoModalScreenStylesDefault } from '@/utils/getInfoModalScreenStylesDefault';
import { getModalHeaderScreenOption } from '@/utils/getModalHeaderScreenOption';

import { exerciseListSchema } from './validation';

type ListInfoModalScreenProps = NativeStackScreenProps<
  StackNavigationParams,
  ScreenNames.ListInfoModalScreen
>;

export function ListInfoModalScreen({ route, navigation }: ListInfoModalScreenProps) {
  const { actionType, username, list_id } = route.params;
  const styles = useStyles(getInfoModalScreenStylesDefault);
  const currentList = useAppSelector((state) => selectExerciseListById(state, list_id));
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: currentList?.name ?? '',
      description: currentList?.description ?? '',
    },
    resolver: yupResolver(exerciseListSchema),
  });

  const handleDelete = () => {
    if (actionType === ExerciseListActionType.Edit) {
      dispatch(thunkDeleteExerciseList({ id: list_id, username }));
      navigation.navigate(ScreenNames.ExerciseListsScreen, { username });
    }
  };

  const onSubmit = useCallback(
    handleSubmit(({ name, description }) => {
      if (actionType === ExerciseListActionType.Create) {
        dispatch(thunkCreateExerciseList({ name, description, username }));
      } else {
        const payload: UpdateExerciseListDTO = {
          username,
          id: list_id,
          name,
          description,
        };

        dispatch(thunkUpdateExerciseList(payload));
      }

      navigation.goBack();
    }),
    [actionType, username, currentList]
  );

  useEffect(() => {
    navigation.setOptions(
      getModalHeaderScreenOption({
        disabled: !isValid,
        onPress: onSubmit,
        title:
          actionType === ExerciseListActionType.Edit
            ? t('exerciseLists.modal.editTitle')
            : t('exerciseLists.modal.createTitle'),
      })
    );
  }, [isValid, onSubmit]);

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name='format-list-bulleted' style={styles.icon} />
      <View>
        <Text style={styles.text}>{t('exerciseLists.modal.name.label')}</Text>
        <CustomTextInput
          name='name'
          control={control}
          placeholder={t('exerciseLists.modal.name.placeholder')}
        />
      </View>
      <View>
        <Text style={styles.text}>{t('exerciseLists.modal.description.label')}</Text>
        <CustomTextInput
          name='description'
          control={control}
          placeholder={t('exerciseLists.modal.description.placeholder')}
        />
      </View>
      {actionType === ExerciseListActionType.Edit && <DeleteItemButton onPress={handleDelete} />}
    </View>
  );
}
