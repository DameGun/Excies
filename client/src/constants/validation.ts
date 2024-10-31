import { toCapitalize } from '@/utils/stringExtensions';

export const ValidationErrors = {
  Required: 'This is a required field',
  PasswordConfirm: 'Passwords should match',
  MaxValue: (constraint: number, field: string) =>
    `${toCapitalize(field)} must be less than ${constraint}`,
  MinValue: (constraint: number, field: string) =>
    `${toCapitalize(field)} must be greater than ${constraint}`,
  MaxLength: (constraint: number, field: string) =>
    `${toCapitalize(field)} length must be less than ${constraint}`,
  MinLength: (constraint: number, field: string) =>
    `${toCapitalize(field)} length must be greater than ${constraint}`,
  Email: 'Please provide correct email',
} as const;
