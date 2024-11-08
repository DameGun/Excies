import { AxiosError } from 'axios';

import { ResponseStatus } from '@/constants/api';

type RequiredUsernameParameter = {
  username: string;
};

type CustomApiError = {
  message: string;
  code: number;
  status: ResponseStatus.Rejected;
};

type BaseApiResponse = {
  status: ResponseStatus.Fullfiled;
};

type ApiResponseWithData<T> = BaseApiResponse & {
  data: T;
};

type ApiResponse<T = undefined> = T extends undefined ? BaseApiResponse : ApiResponseWithData<T>;

type ApiError = CustomApiError | AxiosError;

type ApiResult<T = undefined> = Promise<ApiResponse<T> | ApiError>;

export type {
  ApiError,
  ApiResponse,
  ApiResponseWithData,
  ApiResult,
  BaseApiResponse,
  CustomApiError,
  RequiredUsernameParameter,
};