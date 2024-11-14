import { PERSIST, REHYDRATE } from 'redux-persist';
import type { BaseSliceWithDataArray } from './redux';

type Exercise = {
  id: string;
  muscles_id: string;
  name: string;
  description: string;
};

type ExerciseState = BaseSliceWithDataArray<Exercise> & {
  expiresAt: number;
};

type ExercisePersist =
  | {
      type: typeof REHYDRATE;
      data: Exercise[];
      expiresAt: number;
    }
  | {
      type: typeof PERSIST;
      data: Exercise[];
    };

type GetExercisesDTO = {
  listId: string;
};

type SpecifiedListExercises = {
  listId: string;
  exercises: Exercise[];
};

export type { Exercise, ExerciseState, GetExercisesDTO, SpecifiedListExercises, ExercisePersist };
