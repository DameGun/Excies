import type { BaseSliceWithDataArray } from './redux';

type ExerciseList = {
  id: string;
  userId: string;
  name: string;
  description: string;
  itemsCount?: number;
};

type CreateExerciseListDTO = {
  name: string;
  description?: string;
};

type UpdateExerciseListDTO = {
  id: string;
  name?: string;
  description?: string;
};

type DeleteExerciseListDTO = {
  id: string;
};

type ExerciseListState = BaseSliceWithDataArray<ExerciseList>;

export type {
  CreateExerciseListDTO,
  DeleteExerciseListDTO,
  ExerciseList,
  ExerciseListState,
  UpdateExerciseListDTO,
};
