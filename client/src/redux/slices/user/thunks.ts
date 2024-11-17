import { setIsMetricSystemChoosed } from '@/api/endpoints/token';
import { updateUserWeightPreference } from '@/api/endpoints/user';
import { thunkHandler } from '@/redux/thunkHandler';
import { ApiError } from '@/types/api';
import { TypedThunkApi } from '@/types/redux';
import { User, UpdateUserWeightPreferenceDTO } from '@/types/user';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const thunkUpdateUserWeightPreference = createAsyncThunk<
  User,
  UpdateUserWeightPreferenceDTO,
  TypedThunkApi
>('updateUser', async (payload, { dispatch, rejectWithValue }) => {
  try {
    const response = await thunkHandler(dispatch, updateUserWeightPreference, payload);
    await setIsMetricSystemChoosed(response.is_metric_system_choosed);

    return response;
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});
