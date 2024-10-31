import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Entypo, FontAwesome6 } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  CustomButton,
  CustomFlatList,
  EditIcon,
  EmptyList,
  ListItem,
  Search,
} from '@/components/index';
import { ExerciseListActionType } from '@/constants/exerciseList';
import { ScreenNames } from '@/constants/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useStyles } from '@/hooks/useStyles';
import { selectExerciseListItems } from '@/redux/slices/exerciseListItems/index';
import { thunkGetExerciseListItems } from '@/redux/slices/exerciseListItems/thunks';
import { selectExerciseListById } from '@/redux/slices/exerciseLists';
import { ExerciseListItem, GetExerciseListItemsDTO } from '@/types/exerciseListItem';
import { StackNavigationParams } from '@/types/navigation';

import { getStyles } from './styles';

type ExerciseListItemsScreenProps = NativeStackScreenProps<
  StackNavigationParams,
  ScreenNames.ExerciseListItemsScreen
>;

export function ExerciseListItemsScreen({ route, navigation }: ExerciseListItemsScreenProps) {
  const { list_id, username } = route.params;
  const data = useAppSelector(selectExerciseListItems);
  const currentList = useAppSelector((state) => selectExerciseListById(state, list_id));

  const dispatch = useAppDispatch();
  const styles = useStyles(getStyles);

  const [searchPhrase, setSearchPhrase] = useState('');

  useEffect(() => {
    const payload: GetExerciseListItemsDTO = {
      id: list_id,
      username,
    };
    dispatch(thunkGetExerciseListItems(payload));
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: currentList?.name,
      headerRight: () => (
        <EditIcon
          onPress={() => {
            navigation.navigate(ScreenNames.ListInfoModalScreen, {
              actionType: ExerciseListActionType.Edit,
              username,
              list_id,
            });
          }}
        />
      ),
    });
  }, [currentList]);

  function handleAddExercise() {
    navigation.navigate(ScreenNames.ExercisesModalScreen, { list_id, username });
  }

  function handleClick(item: ExerciseListItem) {
    navigation.navigate(ScreenNames.DetailedExerciseListItemsScreen, {
      username,
      list_id,
      list_item_id: item.id,
      name: item.name,
    });
  }

  return data.length > 0 ? (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Search searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} />
        <CustomFlatList
          data={data}
          renderItem={({ item, isLast, index }) => (
            <ListItem
              title={item.name}
              item={item}
              infoRight={item.last_time_updated}
              isLast={isLast}
              onPress={handleClick}
              index={index}
            />
          )}
          searchPhrase={searchPhrase}
        />
      </View>
      <View style={styles.shadow}>
        <CustomButton
          buttonStyle={styles.addExerciseButton}
          textStyle={styles.addExerciseText}
          iconComponent={<Entypo name='plus' size={24} color={styles.iconColor.color} />}
          onPress={handleAddExercise}
        >
          Add Exercises
        </CustomButton>
      </View>
    </View>
  ) : (
    <EmptyList
      primaryText='No Exercises'
      secondaryText='Build your first list!'
      buttonText='Add Exercise'
      IconComponent={<FontAwesome6 name='dumbbell' size={50} color='#aeaeb2' />}
      onPress={handleAddExercise}
    />
  );
}
