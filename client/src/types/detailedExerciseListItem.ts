import { ItemValueOperationType } from '@/constants/detailedExerciseListItem';

import { RequiredUsernameParameter } from './api';

type DetailedExerciseListItem = {
  id: string;
  list_item_id: string;
  date: string;
  rep: number;
  weight: number;
  notes: string;
  time: Date;
};

type DetailedExerciseListItemsGroup = {
  title: string;
  data: DetailedExerciseListItem[];
};

type GetDetailedExerciseListItemsDTO = RequiredUsernameParameter & {
  list_id: string;
  list_item_id: string;
};

type DetailedExerciseListItemDTO = {
  time: string;
  rep: number;
  weight: number;
};

type DetailedOperationType = {
  type: ItemValueOperationType;
  number: number;
};

type CreateDetailedExerciseListItemDTO = RequiredUsernameParameter & {
  list_id: string;
  list_item_id: string;
  detailed_exercise_list_item: DetailedExerciseListItemDTO;
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

type DetailedExerciseListItemSliceState = {
  data: DetailedExerciseListItemsGroup[];
};

export type {
  CreateDetailedExerciseListItemDTO,
  DeleteDetailedExerciseListItemDTO,
  DetailedExerciseListItem,
  DetailedExerciseListItemsGroup,
  DetailedExerciseListItemSliceState,
  DetailedOperationType,
  GetDetailedExerciseListItemsDTO,
  UpdateDetailedExerciseListItemDTO,
};
