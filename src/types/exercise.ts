import type { PERSIST, REHYDRATE } from 'redux-persist';

import type { SupportedLanguageCodes } from '@/constants/i18n';

import type { BaseSliceWithDataArray } from './redux';

type Exercise = {
  id: string;
  name: string;
  exerciseId: string;
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
  ExercisePersist,
  ExercisesLocalized,
  ExerciseState,
  SpecifiedListExercises,
};
