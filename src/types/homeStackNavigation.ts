import type { ExerciseListActionType } from '@/constants/exerciseList';
import type { HomeScreenNames } from '@/constants/navigation';

type CreateDetailedItemModalScreenParams = {
  listId: string;
  listItemId: string;
};

type DetailedExerciseListItemInfoModalScreenParams = {
  listId: string;
  listItemId: string;
  detailedId: string;
};

type DetailedExerciseListItemsScreenParams = {
  listId: string;
  listItemId: string;
  name: string;
};

type ExerciseListItemsScreenParams = {
  listId: string;
};

type ListInfoModalScreenParams =
  | {
      actionType: ExerciseListActionType.Create;
      listId?: never;
    }
  | {
      actionType: ExerciseListActionType.Edit;
      listId: string;
    };

type ExercisesModalScreenParams = {
  listId: string;
};

type HomeStackNavigationParams = {
  [HomeScreenNames.ExerciseListsScreen]: undefined;
  [HomeScreenNames.CreateDetailedItemModalScreen]: CreateDetailedItemModalScreenParams;
  [HomeScreenNames.DetailedExerciseListItemInfoModalScreen]: DetailedExerciseListItemInfoModalScreenParams;
  [HomeScreenNames.DetailedExerciseListItemsScreen]: DetailedExerciseListItemsScreenParams;
  [HomeScreenNames.ExerciseListItemsScreen]: ExerciseListItemsScreenParams;
  [HomeScreenNames.ListInfoModalScreen]: ListInfoModalScreenParams;
  [HomeScreenNames.ExercisesModalScreen]: ExercisesModalScreenParams;
};

export type { HomeStackNavigationParams };
