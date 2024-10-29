import { RequiredUsernameParameter } from './api';

type ExerciseList = {
  id: string;
  user_id: string;
  name: string;
  description: string;
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
  currentList: ExerciseList | null;
};

export type {
  CreateExerciseListDTO,
  DeleteExerciseListDTO,
  ExerciseList,
  ExerciseListState,
  UpdateExerciseListDTO,
};
