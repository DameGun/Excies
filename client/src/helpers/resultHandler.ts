import { ResponseStatus } from '@/constants/api';
import { ApiResponse } from '@/types/api';

export function handleResult<T = undefined>(data?: T): ApiResponse<T> {
  if (data === undefined) {
    return { status: ResponseStatus.Fullfiled } as ApiResponse<T>;
  } else {
    return { status: ResponseStatus.Fullfiled, data } as ApiResponse<T>;
  }
}
