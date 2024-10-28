import { RequiredUsernameParameter } from './api';

type DetailedExerciseListItem = {
  id: string;
  list_item_id: string;
  date: Date;
  rep: number;
  weight: number;
  notes: string;
  time: Date;
};

type GetDetailedExerciseListItemsDTO = RequiredUsernameParameter & {
  list_id: string;
  list_item_id: string;
};

type CreateDetailedExerciseListItemDTO = RequiredUsernameParameter & {
  list_id: string;
  list_item_id: string;
  detailed_exercise_list_item: string;
};

type UpdateDetailedExerciseListItemDTO = RequiredUsernameParameter & {
  list_id: string;
  list_item_id: string;
  id: string;
  detailed_exercise_list_item: string;
};

type DeleteDetailedExerciseListItemDTO = RequiredUsernameParameter & {
  list_id: string;
  list_item_id: string;
  id: string;
};

export type {
  CreateDetailedExerciseListItemDTO,
  DeleteDetailedExerciseListItemDTO,
  DetailedExerciseListItem,
  GetDetailedExerciseListItemsDTO,
  UpdateDetailedExerciseListItemDTO,
};
