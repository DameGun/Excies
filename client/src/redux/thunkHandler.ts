import { setStatus } from './slices/loading';
import store from './store.js';

type ThunkAPICall<TParams, TReturn> = (params?: TParams) => Promise<TReturn>;

export async function thunkHandler<TParams, TReturn>(
  apiCall: ThunkAPICall<TParams, TReturn>,
  payload?: TParams
) {
  const dispatch = store.dispatch;

  dispatch(setStatus({ status: 'loading' }));

  const response = await apiCall(payload);

  if (typeof response === 'boolean') {
    dispatch(setStatus({ status: 'idle' }));
    return response;
  }

  if (response.success) {
    dispatch(setStatus({ status: 'idle' }));
    return response.data;
  } else {
    dispatch(
      setStatus({
        status: 'failed',
        error: { code: response.response.status, message: response.message },
      })
    );
    throw new Error(response.response.status);
  }
}
