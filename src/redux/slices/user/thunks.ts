import { createAsyncThunk } from '@reduxjs/toolkit';

import { updateUserWeightPreference } from '@/api/endpoints/user';
import { StorageItemsKeys } from '@/constants/token';
import { thunkHandler } from '@/redux/thunkHandler';
import type { ApiError } from '@/types/api';
import type { TypedThunkApi } from '@/types/redux';
import type { UpdateUserWeightPreferenceDTO, User } from '@/types/user';
import { setStorageItem } from '@/utils/storage';

export const thunkUpdateUserWeightPreference = createAsyncThunk<
  User,
  UpdateUserWeightPreferenceDTO,
  TypedThunkApi
>('updateUser', async (payload, { dispatch, rejectWithValue }) => {
  try {
    const response = await thunkHandler(dispatch, updateUserWeightPreference, payload);
    await setStorageItem(
      StorageItemsKeys.IsMetricSystemChoosed,
      String(response.isMetricSystemChoosed)
    );

    return response;
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});
