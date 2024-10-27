import { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useTheme } from '@react-navigation/native';

import {
  thunkCreateExerciseListItem,
  thunkDeleteExerciseListItem,
} from '@/redux/slices/exerciseListItemsSlice';

import { LargeList, Loader, Search } from '../../components/';
import { getModalHeaderScreenOption } from '../../constants/common';
import { thunkGetExercises } from '../../redux/slices/exercisesSlice';

export default function ExercisesModalScreen({ route, navigation }) {
  const { id: list_id, title } = route.params;
  const { data } = useSelector((state) => state.exercises);
  const { data: list_items } = useSelector((state) => state.exerciseListItems);
  const { username } = useSelector((state) => state.auth);
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');

  useEffect(() => {
    if (!data) {
      dispatch(thunkGetExercises());
    }

    navigation.setOptions(
      getModalHeaderScreenOption({
        buttonColor: colors.primary,
        title: `Add to "${title}"`,
        onPress: () => navigation.goBack(),
      })
    );
  }, []);

  function handleExerciseButton(item) {
    if (item.exercise_id) {
      dispatch(
        thunkDeleteExerciseListItem({
          payload: { list_id, username, list_item_id: item.id },
        })
      );
    } else {
      dispatch(
        thunkCreateExerciseListItem({
          payload: { list_id, username, exercise_id: item.id },
        })
      );
    }
  }

  const filteredSections = useMemo(() => {
    if (data && list_items) {
      if (searchPhrase === '') {
        return [
          {
            title: 'Added Exercises',
            data: list_items,
            iconName: 'checkcircle',
          },
          {
            title: 'All Exercises',
            data: data.filter(
              (item) => !list_items.some((listItem) => listItem.exercise_id === item.id)
            ),
            iconName: 'pluscircleo',
          },
        ];
      }

      return [
        {
          title: 'Added Exercises',
          data: list_items.filter((item) =>
            item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
          ),
          iconName: 'checkcircle',
        },
        {
          title: 'All Exercises',
          data: data.filter(
            (item) =>
              item.name
                .toUpperCase()
                .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, '')) &&
              !list_items.some((listItem) => listItem.exercise_id === item.id)
          ),
          iconName: 'pluscircleo',
        },
      ];
    }
  }, [list_items, data, searchPhrase]);

  return (
    <View style={{ flex: 1 }}>
      <Search
        clicked={clicked}
        setClicked={setClicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      {data && list_items && (
        <View style={{ flex: 1 }}>
          <LargeList sections={filteredSections} onPress={handleExerciseButton} />
        </View>
      )}
    </View>
  );
}
