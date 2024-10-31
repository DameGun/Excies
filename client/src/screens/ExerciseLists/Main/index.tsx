import { useEffect } from 'react';
import { View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CustomFlatList, ListItem } from '@/components';
import { ExerciseListActionType } from '@/constants/exerciseList';
import { ScreenNames } from '@/constants/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectExerciseLists } from '@/redux/slices/exerciseLists';
import { thunkGetExerciseLists } from '@/redux/slices/exerciseLists/thunks';
import { ExerciseListItem } from '@/types/exerciseListItem';
import { StackNavigationParams } from '@/types/navigation';

type ExerciseListsScreenProps = NativeStackScreenProps<
  StackNavigationParams,
  ScreenNames.ExerciseListsScreen
>;

export function ExerciseListsScreen({ route, navigation }: ExerciseListsScreenProps) {
  const { username } = route.params;
  const data = useAppSelector(selectExerciseLists);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(thunkGetExerciseLists({ username }));
  }, []);

  const handleListClick = ({ id }: ExerciseListItem) => {
    navigation.navigate(ScreenNames.ExerciseListItemsScreen, {
      list_id: id,
      username,
    });
  };

  const handleNewListClick = () => {
    navigation.navigate(ScreenNames.ListInfoModalScreen, {
      actionType: ExerciseListActionType.Create,
      username,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {data && (
        <CustomFlatList
          title='Exercise lists'
          data={data}
          renderItem={({ item, isLast, index }) => (
            <ListItem
              title={item.name}
              item={item}
              infoRight={item.itemsCount}
              isLast={isLast}
              onPress={handleListClick}
              iconName='list'
              index={index}
            />
          )}
          headerComponent={
            <View>
              <ListItem
                title='New List...'
                iconName='plus'
                onPress={handleNewListClick}
                index={0}
                isLast={false}
              />
            </View>
          }
        />
      )}
    </View>
  );
}
