import type { ItemValueOperationType } from '@/constants/detailedExerciseListItem';

import type { LanguageParameter } from './i18n';
import type { BaseSliceWithDataArray } from './redux';

type DetailedExerciseListItem = {
  id: string;
  listItemId: string;
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

type GetDetailedExerciseListItemsDTO = {
  listId: string;
  listItemId: string;
};

type DetailedOperationType = {
  type: ItemValueOperationType;
  number: number;
};

type CreateDetailedExerciseListItemDTO = LanguageParameter & {
  listId: string;
  listItemId: string;
  detailedExerciseListItem: Pick<DetailedExerciseListItem, 'date' | 'time' | 'rep' | 'weight'>;
};

type UpdateDetailedExerciseListItemDTO = {
  listId: string;
  listItemId: string;
  id: string;
  detailedExerciseListItem: Pick<DetailedExerciseListItem, 'rep' | 'weight' | 'notes'>;
};

type DeleteDetailedExerciseListItemDTO = LanguageParameter & {
  listId: string;
  listItemId: string;
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
