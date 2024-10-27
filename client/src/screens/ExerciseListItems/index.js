import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Entypo, FontAwesome6 } from '@expo/vector-icons';

import { getStyles } from './styles.js';

import {
  CustomButton,
  CustomFlatList,
  EditIcon,
  EmptyList,
  ListItem,
  Search,
} from '../../components/index.js';
import { useStyles } from '../../helpers/customHooks.js';
import { thunkGetExerciseListItems } from '../../redux/slices/exerciseListItemsSlice.js';
import { setCurrentList } from '../../redux/slices/exerciseListsSlice.js';

export default function ExerciseListItemsScreen({ route, navigation }) {
  const { id: list_id, title } = route.params;
  const { data } = useSelector((state) => state.exerciseListItems);
  const { username } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const styles = useStyles(getStyles);

  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');

  useEffect(() => {
    dispatch(thunkGetExerciseListItems({ payload: { id: list_id, username } }));
    dispatch(setCurrentList(list_id));

    navigation.setOptions({
      headerTitle: title,
      headerRight: () => (
        <EditIcon
          onPress={() => {
            navigation.navigate('ListInfoModalScreen', { id: list_id, actionType: 'info' });
          }}
        />
      ),
    });
  }, []);

  function handleAddExercise() {
    navigation.navigate('ExercisesModalScreen', { id: list_id, title });
  }

  function handleClick(item) {
    navigation.navigate('DetailedExerciseListItemsScreen', {
      list_id,
      list_item_id: item.id,
      name: item.name,
    });
  }

  return data.length ? (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Search
          clicked={clicked}
          setClicked={setClicked}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
        />
        <CustomFlatList
          data={data}
          renderItem={({ item, isLast, index }) => (
            <ListItem
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
          text='Add Exercises'
          buttonStyle={styles.addExerciseButton}
          textStyle={styles.addExerciseText}
          iconComponent={<Entypo name='plus' size={24} color={styles.iconColor} />}
          onPress={handleAddExercise}
        />
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
