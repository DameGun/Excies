import { RequiredUsernameParameter } from './api';

type ExerciseListItem = {
  id: string;
  list_id: string;
  exercise_id: string;
};

type GetExerciseListItemsDTO = RequiredUsernameParameter & {
  id: string;
};

type CreateExerciseListItemDTO = RequiredUsernameParameter & {
  list_id: string;
  exercise_id: string;
};

type DeleteExerciseListItemDTO = RequiredUsernameParameter & {
  list_id: string;
  list_item_id: string;
};

export type {
  CreateExerciseListItemDTO,
  DeleteExerciseListItemDTO,
  ExerciseListItem,
  GetExerciseListItemsDTO,
};
