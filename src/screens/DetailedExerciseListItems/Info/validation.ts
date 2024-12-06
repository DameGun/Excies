import * as yup from 'yup';

import {
  NOTEX_MAX_CONSTRAINT,
  REP_MAX_CONSTRAINT,
  REP_MIN_CONSTRAINT,
  WEIGHT_MAX_CONSTRAINT,
  WEIGHT_MIN_CONSTRAINT,
} from '@/constants/detailedExerciseListItem';
import { ValidationErrors } from '@/constants/validation';

export const detailedExerciseListItemSchema = yup.object().shape({
  rep: yup
    .number()
    .max(REP_MAX_CONSTRAINT, ValidationErrors.MaxValue(REP_MAX_CONSTRAINT, 'repetitions'))
    .min(REP_MIN_CONSTRAINT, ValidationErrors.MinValue(REP_MIN_CONSTRAINT, 'repetitions'))
    .required(ValidationErrors.Required),
  weight: yup
    .number()
    .max(WEIGHT_MAX_CONSTRAINT, ValidationErrors.MaxValue(WEIGHT_MAX_CONSTRAINT, 'weight'))
    .min(WEIGHT_MIN_CONSTRAINT, ValidationErrors.MinValue(WEIGHT_MIN_CONSTRAINT, 'weight'))
    .required(ValidationErrors.Required),
  notes: yup
    .string()
    .optional()
    .max(NOTEX_MAX_CONSTRAINT, ValidationErrors.MaxLength(NOTEX_MAX_CONSTRAINT, 'notes')),
});
