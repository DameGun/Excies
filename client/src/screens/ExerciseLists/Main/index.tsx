import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CustomFlatList, ListItem } from '@/components';
import { ExerciseListActionType } from '@/constants/exerciseList';
import { HomeScreenNames } from '@/constants/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectExerciseLists } from '@/redux/slices/exerciseLists';
import { thunkGetExerciseLists } from '@/redux/slices/exerciseLists/thunks';
import type { ExerciseList } from '@/types/exerciseList';
import type { HomeStackNavigationParams } from '@/types/homeStackNavigation';

type ExerciseListsScreenProps = NativeStackScreenProps<
  HomeStackNavigationParams,
  HomeScreenNames.ExerciseListsScreen
>;

export function ExerciseListsScreen({ route, navigation }: ExerciseListsScreenProps) {
  const { username } = route.params;
  const data = useAppSelector(selectExerciseLists);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(thunkGetExerciseLists({ username }));
  }, []);

  const handleListClick = ({ id }: ExerciseList) => {
    navigation.navigate(HomeScreenNames.ExerciseListItemsScreen, {
      list_id: id,
      username,
    });
  };

  const handleNewListClick = () => {
    navigation.navigate(HomeScreenNames.ListInfoModalScreen, {
      actionType: ExerciseListActionType.Create,
      username,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {data && (
        <CustomFlatList
          title={t('exerciseLists.title')}
          data={data}
          renderItem={(props) => (
            <ListItem
              {...props}
              onPress={handleListClick}
              iconName='format-list-bulleted'
              extractTitle={({ name }) => name}
              extractInfo={({ itemsCount }) => itemsCount}
            />
          )}
          headerComponent={
            <View>
              <ListItem
                title={t('exerciseLists.newList')}
                iconName='plus'
                onPress={handleNewListClick}
                isFirst={true}
                isLast={false}
              />
            </View>
          }
        />
      )}
    </View>
  );
}
