import { ExerciseListActionType } from '@/constants/exerciseList';
import { ScreenNames } from '@/constants/navigation';

import { DetailedExerciseListItem } from './detailedExerciseListItem';

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
  item: DetailedExerciseListItem;
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

type StackNavigationParams = {
  [ScreenNames.ExerciseListsScreen]: SharedParams;
  [ScreenNames.CreateDetailedItemModalScreen]: CreateDetailedItemModalScreenParams;
  [ScreenNames.DetailedExerciseListItemInfoModalScreen]: DetailedExerciseListItemInfoModalScreenParams;
  [ScreenNames.DetailedExerciseListItemsScreen]: DetailedExerciseListItemsScreenParams;
  [ScreenNames.ExerciseListItemsScreen]: ExerciseListItemsScreenParams;
  [ScreenNames.ListInfoModalScreen]: ListInfoModalScreenParams;
  [ScreenNames.ExercisesModalScreen]: ExercisesModalScreenParams;
};

export type { StackNavigationParams };
