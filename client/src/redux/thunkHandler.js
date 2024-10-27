import { setStatus } from './slices/loadingSlice.js';

export const thunkHandler = async (params, { dispatch }) => {
  dispatch(setStatus({ status: 'loading' }));

  const response = await params.apicall(params.payload);

  // // Imitate long-time request
  // await new Promise((resolve) => setTimeout(resolve, 1000));

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
};
