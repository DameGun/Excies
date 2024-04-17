import { setStatus } from './slices/loadingSlice.js';

export const thunkHandler = async (params, { dispatch }) => {
    dispatch(setStatus({ status: 'loading' }));
    const response = await params.apicall(params.payload);

    if(response.success) {
        dispatch(setStatus('idle'));
        return response.data;
    }
    else {
        dispatch(setStatus({ status: 'failed', error: response }));
    }
}
