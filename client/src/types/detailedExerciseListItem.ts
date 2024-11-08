import { ItemValueOperationType } from '@/constants/detailedExerciseListItem';

import { RequiredUsernameParameter } from './api';
import { BaseSliceWithDataArray } from './redux';

type DetailedExerciseListItem = {
  id: string;
  list_item_id: string;
  date: string;
  rep: number;
  weight: number;
  notes?: string;
  time: string;
};

type DetailedExerciseListItemsGroup = {
  title: string;
  data: DetailedExerciseListItem[];
};

type GetDetailedExerciseListItemsDTO = RequiredUsernameParameter & {
  list_id: string;
  list_item_id: string;
};

type DetailedOperationType = {
  type: ItemValueOperationType;
  number: number;
};

type CreateDetailedExerciseListItemDTO = RequiredUsernameParameter & {
  list_id: string;
  list_item_id: string;
  detailed_exercise_list_item: Pick<DetailedExerciseListItem, 'time' | 'rep' | 'weight'>;
};

type UpdateDetailedExerciseListItemDTO = RequiredUsernameParameter & {
  list_id: string;
  list_item_id: string;
  id: string;
  detailed_exercise_list_item: Pick<DetailedExerciseListItem, 'rep' | 'weight' | 'notes'>;
};

type DeleteDetailedExerciseListItemDTO = RequiredUsernameParameter & {
  list_id: string;
  list_item_id: string;
  id: string;
};

type DetailedExerciseListItemState = BaseSliceWithDataArray<DetailedExerciseListItemsGroup>;

export type {
  CreateDetailedExerciseListItemDTO,
  DeleteDetailedExerciseListItemDTO,
  DetailedExerciseListItem,
  DetailedExerciseListItemsGroup,
  DetailedExerciseListItemState,
  DetailedOperationType,
  GetDetailedExerciseListItemsDTO,
  UpdateDetailedExerciseListItemDTO,
};
