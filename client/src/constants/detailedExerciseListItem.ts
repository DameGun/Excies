import { Icons } from './icons';

export const REP_MAX_CONSTRAINT = 100;
export const REP_MIN_CONSTRAINT = 1;

export const WEIGHT_MAX_CONSTRAINT = 1000;
export const WEIGHT_MIN_CONSTRAINT = 1;

export const NOTEX_MAX_CONSTRAINT = 100;

export const KG_TO_LBS_COEFFICIENT = 2.2;

export enum CreateDetailedExerciseListItemParameterType {
  Repetitions = 'repetitions',
  Weight = 'weight',
}

export enum ItemValueOperationType {
  Increase = 'increase',
  Decrease = 'decrease',
}

export const CreationActiveIcon = {
  [CreateDetailedExerciseListItemParameterType.Repetitions]: Icons.Repeat,
  [CreateDetailedExerciseListItemParameterType.Weight]: Icons.Weight,
} as const;

export enum WeightMeasurementSystemType {
  Kg = 'kg',
  Lbs = 'lbs',
}
