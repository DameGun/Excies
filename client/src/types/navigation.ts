import { ScreenNames } from '@/constants/navigation';

type CreateDetailedItemModalScreenParams = {
  username: string;
  list_id: string;
  list_item_id: string;
};

type StackNavigationParams = {
  [ScreenNames.ExerciseListsScreen]: undefined;
  [ScreenNames.CreateDetailedItemModalScreen]: CreateDetailedItemModalScreenParams;
  [ScreenNames.DetailedExerciseListItemInfoModalScreen]: undefined;
  [ScreenNames.DetailedExerciseListItemsScreen]: undefined;
  [ScreenNames.ExerciseListItemsScreen]: undefined;
  [ScreenNames.ListInfoModalScreen]: undefined;
  [ScreenNames.ExercisesModalScreen]: undefined;
};

export type { StackNavigationParams };
