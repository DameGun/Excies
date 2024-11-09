import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { LogoutButton } from '@/components/LogoutButton';
import { ScreenNames } from '@/constants/navigation';
import { useAppSelector } from '@/hooks/redux';
import { useStyles } from '@/hooks/useStyles';
import { selectUsername } from '@/redux/slices/auth';
import type { StackNavigationParams } from '@/types/navigation';
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

const Stack = createStackNavigator<StackNavigationParams>();

export function ExerciseListStack() {
  const commonScreenStyles = useStyles(getCommonHeaderScreenStyles);
  const username = useAppSelector(selectUsername) as NonNullable<string>;

  return (
    <Stack.Navigator screenOptions={getCommonHeaderScreenOptions(commonScreenStyles)}>
      <Stack.Group>
        <Stack.Screen
          name={ScreenNames.ExerciseListsScreen}
          component={ExerciseListsScreen}
          options={{
            headerLeft: () => <LogoutButton />,
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
          ...TransitionPresets.ModalPresentationIOS,
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name={ScreenNames.ListInfoModalScreen} component={ListInfoModalScreen} />
        <Stack.Screen name={ScreenNames.ExercisesModalScreen} component={ExercisesModalScreen} />
        <Stack.Screen
          name={ScreenNames.CreateDetailedItemModalScreen}
          component={CreateDetailedItemModalScreen}
          options={{
            presentation: 'transparentModal',
            cardOverlayEnabled: true,
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
