import * as yup from 'yup';

import { ValidationErrors } from '@/constants/validation';

const loginSchema = yup.object().shape({
  username: yup.string().required(ValidationErrors.Required),
  password: yup.string().required(ValidationErrors.Required),
});

const registerSchema = yup.object().shape({
  username: yup.string().required(ValidationErrors.Required),
  password: yup.string().required(ValidationErrors.Required),
  confirmPassword: yup.string().oneOf([yup.ref('password')], ValidationErrors.PasswordConfirm),
  email: yup.string().email().optional(),
});

export { loginSchema, registerSchema };
