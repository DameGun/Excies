import { isAxiosError } from 'axios';

import { ApiError, CustomApiError } from '@/types/api';

export function handleError(error: unknown): ApiError {
  if (isAxiosError(error)) {
    return error;
  }

  const errorObject = error as object;

  if ('message' in errorObject && 'code' in errorObject) {
    return errorObject as CustomApiError;
  }

  return {
    message: 'Unkown error',
    code: 520,
    status: 'rejected',
  };
}
