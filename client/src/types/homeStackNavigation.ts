import type { ExerciseListActionType } from '@/constants/exerciseList';
import type { HomeScreenNames } from '@/constants/navigation';

type SharedParams = {
  username: string;
};

type CreateDetailedItemModalScreenParams = SharedParams & {
  username: string;
  list_id: string;
  list_item_id: string;
};

type DetailedExerciseListItemInfoModalScreenParams = SharedParams & {
  username: string;
  list_id: string;
  list_item_id: string;
  detailed_id: string;
};

type DetailedExerciseListItemsScreenParams = SharedParams & {
  list_id: string;
  list_item_id: string;
  name: string;
};

type ExerciseListItemsScreenParams = SharedParams & {
  list_id: string;
};

type ListInfoModalScreenParams = SharedParams &
  (
    | {
        actionType: ExerciseListActionType.Create;
        list_id?: never;
      }
    | {
        actionType: ExerciseListActionType.Edit;
        list_id: string;
      }
  );

type ExercisesModalScreenParams = SharedParams & {
  list_id: string;
};

type HomeStackNavigationParams = {
  [HomeScreenNames.ExerciseListsScreen]: SharedParams;
  [HomeScreenNames.CreateDetailedItemModalScreen]: CreateDetailedItemModalScreenParams;
  [HomeScreenNames.DetailedExerciseListItemInfoModalScreen]: DetailedExerciseListItemInfoModalScreenParams;
  [HomeScreenNames.DetailedExerciseListItemsScreen]: DetailedExerciseListItemsScreenParams;
  [HomeScreenNames.ExerciseListItemsScreen]: ExerciseListItemsScreenParams;
  [HomeScreenNames.ListInfoModalScreen]: ListInfoModalScreenParams;
  [HomeScreenNames.ExercisesModalScreen]: ExercisesModalScreenParams;
};

export type { HomeStackNavigationParams };
