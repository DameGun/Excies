import type { RequiredUsernameParameter } from './api';
import { LanguageParameter } from './i18n';
import type { BaseSliceWithDataArray } from './redux';

type ExerciseListItem = {
  id: string;
  list_id: string;
  exercise_id: string;
  name: string;
  last_time_updated: string;
};

type GetExerciseListItemsDTO = RequiredUsernameParameter & LanguageParameter & {
  id: string;
};

type GetExerciseListItemByIdDTO = RequiredUsernameParameter & LanguageParameter & {
  list_id: string;
  id: string;
};

type CreateExerciseListItemDTO = RequiredUsernameParameter & LanguageParameter & {
  list_id: string;
  exercise_id: string;
};

type DeleteExerciseListItemDTO = RequiredUsernameParameter & {
  list_id: string;
  list_item_id: string;
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
