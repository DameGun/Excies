import { ApiResponse } from '@/types/api';

export function handleResult<T>(data: T): ApiResponse<T> {
  return {
    data,
    status: 'fullfiled',
  };
}
