import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { LargeList, Search } from '@/components';
import type { ScreenNames } from '@/constants/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectExerciseListItems } from '@/redux/slices/exerciseListItems';
import {
  thunkCreateExerciseListItem,
  thunkDeleteExerciseListItem,
} from '@/redux/slices/exerciseListItems/thunks';
import { selectExerciseListById } from '@/redux/slices/exerciseLists';
import { selectExercisesDiffSelector } from '@/redux/slices/exercises';
import { thunkGetExercises } from '@/redux/slices/exercises/thunks';
import type { Exercise } from '@/types/exercise';
import type {
  CreateExerciseListItemDTO,
  DeleteExerciseListItemDTO,
  ExerciseListItem,
} from '@/types/exerciseListItem';
import type { StackNavigationParams } from '@/types/navigation';
import type { SectionListType } from '@/types/section';
import { getExercisesWithSearch } from '@/utils/exercises';
import { getModalHeaderScreenOption } from '@/utils/getModalHeaderScreenOption';
import { isExerciseListItem } from '@/utils/typePredicates';

type ExercisesModalScreenProps = NativeStackScreenProps<
  StackNavigationParams,
  ScreenNames.ExercisesModalScreen
>;

export function ExercisesModalScreen({ route, navigation }: ExercisesModalScreenProps) {
  const { list_id, username } = route.params;
  const exercises = useAppSelector(selectExercisesDiffSelector);
  const listItems = useAppSelector(selectExerciseListItems);
  const currentList = useAppSelector((state) => selectExerciseListById(state, list_id));
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [searchPhrase, setSearchPhrase] = useState('');

  useEffect(() => {
    dispatch(thunkGetExercises({ listId: list_id }));

    navigation.setOptions(
      getModalHeaderScreenOption({
        title: t('exercises.title', { listName: currentList?.name }),
        disableRightButton: true,
      })
    );
  }, []);

  const handleExerciseButton = useCallback((item: Exercise | ExerciseListItem) => {
    if (isExerciseListItem(item)) {
      const payload: DeleteExerciseListItemDTO = {
        list_id,
        username,
        list_item_id: item.id,
      };

      dispatch(thunkDeleteExerciseListItem(payload));
    } else {
      const payload: CreateExerciseListItemDTO = {
        list_id,
        username,
        exercise_id: item.id,
      };

      dispatch(thunkCreateExerciseListItem(payload));
    }
  }, []);

  const filteredSections = useMemo<SectionListType<Exercise | ExerciseListItem>>(() => {
    const addedExercises = getExercisesWithSearch(listItems, searchPhrase);
    const allExercises = getExercisesWithSearch(exercises, searchPhrase);

    return [
      {
        title: t('exercises.addedSectionTitle'),
        data: addedExercises,
        iconName: 'checkbox-marked-circle',
      },
      {
        title: t('exercises.allSectionTitle'),
        data: allExercises,
        iconName: 'plus-circle-outline',
      },
    ];
  }, [listItems, exercises, searchPhrase]);

  return (
    <View style={{ flex: 1 }}>
      <Search searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} />
      {exercises.length > 0 && (
        <View style={{ flex: 1 }}>
          <LargeList sections={filteredSections} onPress={handleExerciseButton} />
        </View>
      )}
    </View>
  );
}
