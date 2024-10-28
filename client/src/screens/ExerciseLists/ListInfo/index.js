import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

import { getStyles } from './styles.js';
import { listInfoSchema } from './validation.js';

import { CustomButton, CustomTextInput } from '../../../components/index.js';
import { getModalHeaderScreenOption } from '../../../constants/common.js';
import { useStyles } from '../../../helpers/customHooks.js';
import { validate } from '../../../helpers/validate.js';
import {
  thunkCreateExerciseList,
  thunkDeleteExerciseList,
  thunkUpdateExerciseList,
} from '../../../redux/slices/exerciseListsSlice.js';

export default function ListInfoModalScreen({ route, navigation }) {
  const { colors } = useTheme();
  const styles = useStyles(getStyles);
  const { currentList } = useSelector((state) => state.exerciseLists);
  const { status } = useSelector((state) => state.loading);
  const { username } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [errors, setErrors] = useState({
    submit: false,
    messages: {},
  });

  const [actionType, setActionType] = useState('');
  const [id, setId] = useState('');

  async function handleSubmit() {
    setErrors(await validate({ name, description }, listInfoSchema));
  }

  useEffect(() => {
    if (currentList) {
      if (route.params?.id == currentList.id) {
        setId(route.params.id);
        setName(currentList.name);
        setDescription(currentList.description);
        setActionType(route.params.actionType);
      }
    }
  }, []);

  useEffect(() => {
    if (errors.submit && status == 'idle') {
      if (actionType == 'info') {
        dispatch(thunkUpdateExerciseList({ payload: { username, id, name, description } }));
      } else if (actionType == 'delete') {
        dispatch(thunkDeleteExerciseList({ payload: { username, id } }));
      } else {
        dispatch(thunkCreateExerciseList({ payload: { username, name, description } }));
      }
    }
  }, [errors]);

  useEffect(() => {
    if (errors.submit) {
      navigation.goBack();

      if (actionType) {
        navigation.navigate('ExerciseListsScreen');
      } else {
        navigation.navigate('ExerciseListItemsScreen', {
          id: currentList.id,
          title: currentList.name,
        });
      }
    }
  }, [currentList]);

  useEffect(() => {
    navigation.setOptions(
      getModalHeaderScreenOption({
        buttonColor: colors.primary,
        disabled: !Boolean(name),
        onPress: handleSubmit,
        title: actionType == 'info' ? 'List Info' : 'New List',
      })
    );
  }, [name]);

  return (
    <View style={styles.container}>
      <Entypo name='list' size={70} color={colors.primary} style={styles.icon} />
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Name</Text>
        <CustomTextInput
          placeholder='Monday List, Upper Body, Best Training...'
          style={styles.input}
          onChangeText={setName}
          defaultValue={name}
        />
        <Text style={styles.error}>{errors.messages.common}</Text>
      </View>
      <View style={{ ...styles.inputContainer, marginTop: 10 }}>
        <Text style={styles.text}>Description</Text>
        <CustomTextInput
          placeholder='Set a decription for list (optional)'
          style={styles.input}
          onChangeText={setDescription}
          defaultValue={description}
        />
      </View>
      {actionType && (
        <CustomButton
          text='Delete'
          textStyle={styles.deleteButtonText}
          buttonStyle={styles.deleteButton}
          iconComponent={<FontAwesome name='trash-o' size={20} color='red' />}
          onPress={() => {
            setActionType('delete');
            handleSubmit();
          }}
        />
      )}
    </View>
  );
}
