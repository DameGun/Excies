import { Button } from 'react-native';

import { useTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { ScreenNames } from '@/constants/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useStyles } from '@/hooks/useStyles';
import { selectUsername } from '@/redux/slices/auth';
import { thunkLogout } from '@/redux/slices/auth/thunks';
import { StackNavigationParams } from '@/types/navigation';
import { getCommonHeaderScreenOptions } from '@/utils/getCommonHeaderScreenOptions';

import {
  CreateDetailedItemModalScreen,
  DetailedExerciseListItemInfoModalScreen,
  DetailedExerciseListItemsScreen,
  ExerciseListItemsScreen,
  ExerciseListsScreen,
  ExercisesModalScreen,
  ListInfoModalScreen,
} from '../screens';

const Stack = createStackNavigator<StackNavigationParams>();

export function ExerciseListStack() {
  const commonScreenOptions = useStyles(getCommonHeaderScreenOptions);
  const { colors } = useTheme();
  const username = useAppSelector(selectUsername) as NonNullable<string>;
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(thunkLogout());
  };

  return (
    <Stack.Navigator screenOptions={commonScreenOptions}>
      <Stack.Group>
        <Stack.Screen
          name={ScreenNames.ExerciseListsScreen}
          component={ExerciseListsScreen}
          options={{
            headerLeft: () => (
              <Button title='Log out' color={colors.primary} onPress={handleLogout} />
            ),
          }}
          initialParams={{
            username,
          }}
        />
        <Stack.Screen
          name={ScreenNames.ExerciseListItemsScreen}
          component={ExerciseListItemsScreen}
        />
        <Stack.Screen
          name={ScreenNames.DetailedExerciseListItemsScreen}
          component={DetailedExerciseListItemsScreen}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          gestureEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      >
        <Stack.Screen name={ScreenNames.ListInfoModalScreen} component={ListInfoModalScreen} />
        <Stack.Screen
          name={ScreenNames.ExercisesModalScreen}
          component={ExercisesModalScreen}
          // options={{
          //   headerLeft: '',
          // }}
        />
        <Stack.Screen
          name={ScreenNames.CreateDetailedItemModalScreen}
          component={CreateDetailedItemModalScreen}
          options={{
            presentation: 'transparentModal',
            gestureResponseDistance: 500,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ScreenNames.DetailedExerciseListItemInfoModalScreen}
          component={DetailedExerciseListItemInfoModalScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
