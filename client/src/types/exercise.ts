import { PERSIST, REHYDRATE } from 'redux-persist';
import type { BaseSliceWithDataArray } from './redux';
import { SupportedLanguageCodes } from '@/constants/i18n';

type Exercise = {
  id: string;
  name: string;
  exercise_id: string;
};

type ExerciseState = BaseSliceWithDataArray<Exercise> & {
  expiresAt: number;
  language: SupportedLanguageCodes;
};

type ExercisePersist =
  | {
      type: typeof REHYDRATE;
      data: Exercise[];
      expiresAt: number;
      language: SupportedLanguageCodes;
    }
  | {
      type: typeof PERSIST;
      data: Exercise[];
    };

type ExercisesLocalized = {
  language: SupportedLanguageCodes;
  data: Exercise[];
};

type SpecifiedListExercises = {
  listId: string;
  exercises: Exercise[];
};

export type {
  Exercise,
  ExerciseState,
  SpecifiedListExercises,
  ExercisePersist,
  ExercisesLocalized,
};
