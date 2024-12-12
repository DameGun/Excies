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
import { Icons } from '@/constants/icons';
import { HomeScreenNames } from '@/constants/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useStyles } from '@/hooks/useStyles';
import { selectExerciseListItems } from '@/redux/slices/exerciseListItems/index';
import { thunkGetExerciseListItems } from '@/redux/slices/exerciseListItems/thunks';
import { selectExerciseListById } from '@/redux/slices/exerciseLists';
import type { ExerciseListItem, GetExerciseListItemsDTO } from '@/types/exerciseListItem';
import type { HomeStackNavigationParams } from '@/types/homeStackNavigation';

import { getStyles } from './styles';
import { SupportedLanguageCodes } from '@/constants/i18n';

type ExerciseListItemsScreenProps = NativeStackScreenProps<
  HomeStackNavigationParams,
  HomeScreenNames.ExerciseListItemsScreen
>;

export function ExerciseListItemsScreen({ route, navigation }: ExerciseListItemsScreenProps) {
  const { list_id, username } = route.params;
  const data = useAppSelector(selectExerciseListItems);
  const currentList = useAppSelector((state) => selectExerciseListById(state, list_id));

  const dispatch = useAppDispatch();
  const styles = useStyles(getStyles);
  const { t, i18n } = useTranslation();

  const [searchPhrase, setSearchPhrase] = useState('');

  useEffect(() => {
    const language = i18n.language as SupportedLanguageCodes;

    const payload: GetExerciseListItemsDTO = {
      id: list_id,
      username,
      language,
    };
    dispatch(thunkGetExerciseListItems(payload));
  }, [i18n]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: currentList?.name,
      headerRight: () => (
        <EditIcon
          onPress={() => {
            navigation.navigate(HomeScreenNames.ListInfoModalScreen, {
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
    navigation.navigate(HomeScreenNames.ExercisesModalScreen, { list_id, username });
  }

  function handleClick(item: ExerciseListItem) {
    navigation.navigate(HomeScreenNames.DetailedExerciseListItemsScreen, {
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
          iconName={Icons.Plus}
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
      iconName={Icons.Dumbell}
      onPress={handleAddExercise}
    />
  );
}
