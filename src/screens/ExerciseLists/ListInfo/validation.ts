import * as yup from 'yup';

import {
  DESCRIPTION_MAX_CONSTRAINT,
  LIST_NAME_MAX_CONSTRAINT,
  LIST_NAME_MIN_CONSTRAINT,
} from '@/constants/exerciseList';
import { ValidationErrors } from '@/constants/validation';

export const exerciseListSchema = yup.object().shape({
  name: yup
    .string()
    .min(LIST_NAME_MIN_CONSTRAINT, ValidationErrors.MinLength(LIST_NAME_MIN_CONSTRAINT, 'name'))
    .max(LIST_NAME_MAX_CONSTRAINT, ValidationErrors.MaxLength(LIST_NAME_MAX_CONSTRAINT, 'name'))
    .required(ValidationErrors.Required),
  description: yup
    .string()
    .optional()
    .max(
      DESCRIPTION_MAX_CONSTRAINT,
      ValidationErrors.MaxLength(DESCRIPTION_MAX_CONSTRAINT, 'description')
    ),
});
