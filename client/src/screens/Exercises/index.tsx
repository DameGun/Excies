import { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { LargeList, Search } from '@/components';
import { ScreenNames } from '@/constants/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { selectExerciseListItems } from '@/redux/slices/exerciseListItems';
import {
  thunkCreateExerciseListItem,
  thunkDeleteExerciseListItem,
} from '@/redux/slices/exerciseListItems/thunks';
import { selectExerciseListById } from '@/redux/slices/exerciseLists';
import { selectExercisesDiffSelector } from '@/redux/slices/exercises';
import { thunkGetExercises } from '@/redux/slices/exercises/thunks';
import { Exercise } from '@/types/exercise';
import {
  CreateExerciseListItemDTO,
  DeleteExerciseListItemDTO,
  ExerciseListItem,
} from '@/types/exerciseListItem';
import { StackNavigationParams } from '@/types/navigation';
import { SectionListType } from '@/types/section';
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
  const { colors } = useCustomTheme();
  const dispatch = useAppDispatch();

  const [searchPhrase, setSearchPhrase] = useState('');

  useEffect(() => {
    dispatch(thunkGetExercises({ listId: list_id }));

    navigation.setOptions(
      getModalHeaderScreenOption({
        color: colors.primary,
        title: `Add to "${currentList?.name}"`,
        onPress: () => navigation.goBack(),
      })
    );
  }, []);

  const handleExerciseButton = (item: Exercise | ExerciseListItem) => {
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
  };

  const filteredSections = useMemo<SectionListType<Exercise | ExerciseListItem>>(() => {
    const addedExercises = getExercisesWithSearch(listItems, searchPhrase);
    const allExercises = getExercisesWithSearch(exercises, searchPhrase);

    return [
      {
        title: 'Added Exercises',
        data: addedExercises,
        iconName: 'checkcircle',
      },
      {
        title: 'All Exercises',
        data: allExercises,
        iconName: 'pluscircleo',
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
