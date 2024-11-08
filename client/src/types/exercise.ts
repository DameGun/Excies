import { BaseSliceWithDataArray } from './redux';

type Exercise = {
  id: string;
  muscles_id: string;
  name: string;
  description: string;
};

type ExerciseState = BaseSliceWithDataArray<Exercise>;

type GetExercisesDTO = {
  listId: string;
};

type SpecifiedListExercises = {
  listId: string;
  exercises: Exercise[];
};

export type { Exercise, ExerciseState, GetExercisesDTO, SpecifiedListExercises };
