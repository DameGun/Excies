import { AxiosError } from 'axios';

type RequiredUsernameParameter = {
  username: string;
};

type CustomApiError = {
  message: string;
  code: number;
  status: 'rejected';
};

type ApiResponse<T> = {
  data: T;
  status: 'fullfiled';
};

type ApiError = CustomApiError | AxiosError;

type ApiResult<T = undefined> = Promise<ApiResponse<T> | ApiError>;

export type { ApiError, ApiResponse, ApiResult, CustomApiError, RequiredUsernameParameter };
