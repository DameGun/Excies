import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { LargeList, Search } from '@/components';
import { Icons } from '@/constants/icons';
import type { HomeScreenNames } from '@/constants/navigation';
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
import type { HomeStackNavigationParams } from '@/types/homeStackNavigation';
import type { SectionListType } from '@/types/section';
import { getExercisesWithSearch } from '@/utils/exercises';
import { getModalHeaderScreenOption } from '@/utils/getModalHeaderScreenOption';
import { isExerciseListItem } from '@/utils/typePredicates';
import { SupportedLanguageCodes } from '@/constants/i18n';

type ExercisesModalScreenProps = NativeStackScreenProps<
  HomeStackNavigationParams,
  HomeScreenNames.ExercisesModalScreen
>;

export function ExercisesModalScreen({ route, navigation }: ExercisesModalScreenProps) {
  const { list_id, username } = route.params;
  const exercises = useAppSelector(selectExercisesDiffSelector);
  const listItems = useAppSelector(selectExerciseListItems);
  const currentList = useAppSelector((state) => selectExerciseListById(state, list_id));
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();

  const [searchPhrase, setSearchPhrase] = useState('');

  useEffect(() => {
    const language = i18n.language as SupportedLanguageCodes;

    dispatch(thunkGetExercises({ language }));
  }, [i18n]);

  useEffect(() => {
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
      const language = i18n.language as SupportedLanguageCodes;
      const payload: CreateExerciseListItemDTO = {
        list_id,
        username,
        exercise_id: item.exercise_id,
        language,
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
        iconName: Icons.CheckboxCircle,
      },
      {
        title: t('exercises.allSectionTitle'),
        data: allExercises,
        iconName: Icons.PlusCircleOutline,
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
