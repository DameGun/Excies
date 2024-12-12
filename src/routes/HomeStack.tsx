import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { HomeScreenNames } from '@/constants/navigation';
import { useAppSelector } from '@/hooks/redux';
import { useStyles } from '@/hooks/useStyles';
import { selectUsername } from '@/redux/slices/auth';
import type { HomeStackNavigationParams } from '@/types/homeStackNavigation';
import {
  getCommonHeaderScreenOptions,
  getCommonHeaderScreenStyles,
} from '@/utils/getCommonHeaderScreenOptions';

import {
  CreateDetailedItemModalScreen,
  DetailedExerciseListItemInfoModalScreen,
  DetailedExerciseListItemsScreen,
  ExerciseListItemsScreen,
  ExerciseListsScreen,
  ExercisesModalScreen,
  ListInfoModalScreen,
} from '../screens';

const Stack = createStackNavigator<HomeStackNavigationParams>();

export function HomeStack() {
  const commonScreenStyles = useStyles(getCommonHeaderScreenStyles);
  const username = useAppSelector(selectUsername) as NonNullable<string>;

  return (
    <Stack.Navigator screenOptions={getCommonHeaderScreenOptions(commonScreenStyles)}>
      <Stack.Group>
        <Stack.Screen
          name={HomeScreenNames.ExerciseListsScreen}
          component={ExerciseListsScreen}
          options={{
            headerTitle: 'Excies',
          }}
          initialParams={{
            username,
          }}
        />
        <Stack.Screen
          name={HomeScreenNames.ExerciseListItemsScreen}
          component={ExerciseListItemsScreen}
        />
        <Stack.Screen
          name={HomeScreenNames.DetailedExerciseListItemsScreen}
          component={DetailedExerciseListItemsScreen}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          headerTitleAlign: 'center',
          ...TransitionPresets.ModalPresentationIOS,
        }}
      >
        <Stack.Screen name={HomeScreenNames.ListInfoModalScreen} component={ListInfoModalScreen} />
        <Stack.Screen
          name={HomeScreenNames.ExercisesModalScreen}
          component={ExercisesModalScreen}
        />
        <Stack.Screen
          name={HomeScreenNames.CreateDetailedItemModalScreen}
          component={CreateDetailedItemModalScreen}
          options={{
            presentation: 'transparentModal',
            cardOverlayEnabled: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={HomeScreenNames.DetailedExerciseListItemInfoModalScreen}
          component={DetailedExerciseListItemInfoModalScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
