import type { LanguageParameter } from './i18n';
import type { BaseSliceWithDataArray } from './redux';

type ExerciseListItem = {
  id: string;
  listId: string;
  exerciseId: string;
  name: string;
  lastTimeUpdated: string;
};

type GetExerciseListItemsDTO = LanguageParameter & {
  id: string;
};

type GetExerciseListItemByIdDTO = LanguageParameter & {
  listId: string;
  id: string;
};

type CreateExerciseListItemDTO = LanguageParameter & {
  listId: string;
  exerciseId: string;
};

type DeleteExerciseListItemDTO = {
  listId: string;
  listItemId: string;
};

type ExerciseListItemState = BaseSliceWithDataArray<ExerciseListItem>;

export type {
  CreateExerciseListItemDTO,
  DeleteExerciseListItemDTO,
  ExerciseListItem,
  ExerciseListItemState,
  GetExerciseListItemByIdDTO,
  GetExerciseListItemsDTO,
};
