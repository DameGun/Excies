import { ResponseStatus } from '@/constants/api';
import { LoadingState } from '@/constants/loading';
import { ApiResult, BaseApiResponse } from '@/types/api';

import { setStatus } from './slices/loading';
import store from './store';

type ThunkHandlerReturnType<TReturn> = Promise<
  TReturn extends undefined ? BaseApiResponse : TReturn
>;

export async function thunkHandler<TParams, TReturn>(
  apiCall: (params: TParams) => ApiResult<TReturn>,
  payload: TParams
): ThunkHandlerReturnType<TReturn>;

export async function thunkHandler<TParams, TReturn>(
  apiCall: () => ApiResult<TReturn>,
  payload?: TParams
): ThunkHandlerReturnType<TReturn>;

export async function thunkHandler<TParams, TReturn>(
  apiCall: (params?: TParams) => ApiResult<TReturn>,
  payload?: TParams
) {
  const dispatch = store.dispatch;

  dispatch(setStatus({ status: LoadingState.Loading }));

  const response = payload !== undefined ? await apiCall(payload) : await apiCall();

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
