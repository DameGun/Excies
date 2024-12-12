import { ResponseStatus } from '@/constants/api';
import type { ApiResponse } from '@/types/api';

export function handleResult<T = undefined>(data?: T): ApiResponse<T> {
  if (data === undefined) {
    return { status: ResponseStatus.Fullfiled } as ApiResponse<T>;
  } else {
    return { status: ResponseStatus.Fullfiled, data } as ApiResponse<T>;
  }
}
