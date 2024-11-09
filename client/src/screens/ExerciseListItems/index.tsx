import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

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
import type { ExerciseListItem, GetExerciseListItemsDTO } from '@/types/exerciseListItem';
import type { StackNavigationParams } from '@/types/navigation';

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
  const { t } = useTranslation();

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
          renderItem={(props) => (
            <ListItem
              {...props}
              extractTitle={({ name }) => name}
              extractInfo={({ last_time_updated }) => last_time_updated}
              onPress={handleClick}
            />
          )}
          searchPhrase={searchPhrase}
        />
      </View>
      <View>
        <CustomButton
          buttonStyle={styles.addExerciseButton}
          textStyle={styles.addExerciseText}
          iconName='plus'
          iconStyle={styles.addButtonIcon}
          onPress={handleAddExercise}
        >
          {t('exerciseListItems.addExercises')}
        </CustomButton>
      </View>
    </View>
  ) : (
    <EmptyList
      primaryText={t('exerciseListItems.empty.mainText')}
      secondaryText={t('exerciseListItems.empty.secondaryText')}
      buttonText={t('exerciseListItems.addExercises')}
      iconName='dumbbell'
      onPress={handleAddExercise}
    />
  );
}
