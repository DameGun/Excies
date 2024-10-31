import { RequiredUsernameParameter } from './api';

type ExerciseList = {
  id: string;
  user_id: string;
  name: string;
  description: string;
  itemsCount?: number;
};

type CreateExerciseListDTO = RequiredUsernameParameter & {
  name: string;
  description?: string;
};

type UpdateExerciseListDTO = RequiredUsernameParameter & {
  id: string;
  name?: string;
  description?: string;
};

type DeleteExerciseListDTO = RequiredUsernameParameter & {
  id: string;
};

type ExerciseListState = {
  data: ExerciseList[];
};

export type {
  CreateExerciseListDTO,
  DeleteExerciseListDTO,
  ExerciseList,
  ExerciseListState,
  UpdateExerciseListDTO,
};
