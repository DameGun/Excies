import { ResponseStatus } from '@/constants/api';
import { LoadingState } from '@/constants/loading';
import { ApiResult, BaseApiResponse } from '@/types/api';
import { AppDispatch } from '@/types/redux';

import { setStatus } from './slices/loading';

type ThunkHandlerReturnType<TReturn> = Promise<
  TReturn extends undefined ? BaseApiResponse : TReturn
>;

export async function thunkHandler<TParams, TReturn>(
  dispatch: AppDispatch,
  apiCall: (params: TParams) => ApiResult<TReturn>,
  payload: TParams
): ThunkHandlerReturnType<TReturn>;

export async function thunkHandler<TParams, TReturn>(
  dispatch: AppDispatch,
  apiCall: () => ApiResult<TReturn>,
  payload?: TParams
): ThunkHandlerReturnType<TReturn>;

export async function thunkHandler<TParams, TReturn>(
  dispatch: AppDispatch,
  apiCall: (params?: TParams) => ApiResult<TReturn>,
  payload?: TParams
) {
  dispatch(setStatus({ status: LoadingState.Loading }));

  const response = payload !== undefined ? await apiCall(payload) : await apiCall();

  console.log(apiCall.name, response.status);

  if (response.status === ResponseStatus.Fullfiled) {
    dispatch(setStatus({ status: LoadingState.Idle }));

    if ('data' in response) {
      return response.data;
    }

    return response;
  } else {
    dispatch(
      setStatus({
        status: LoadingState.Failed,
        errorMessage: response.message,
      })
    );

    throw new Error(response.message);
  }
}
