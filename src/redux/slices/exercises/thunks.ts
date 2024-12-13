import { createAsyncThunk } from '@reduxjs/toolkit';
import { PERSIST, REHYDRATE } from 'redux-persist';

import { getExercises } from '@/api/endpoints/exercise';
import { ITEM_PERSIST_LIFETIME } from '@/constants/persist';
import { thunkHandler } from '@/redux/thunkHandler';
import type { ApiError } from '@/types/api';
import type { ExercisePersist } from '@/types/exercise';
import type { LanguageParameter } from '@/types/i18n';
import type { TypedThunkApi } from '@/types/redux';

export const thunkGetExercises = createAsyncThunk<
  ExercisePersist,
  LanguageParameter,
  TypedThunkApi
>('getExercises', async (payload, { dispatch, rejectWithValue, getState }) => {
  try {
    const {
      exercises: { data, expiresAt, language },
    } = getState();

    const currentDate = Date.now();
    const isExpired = Math.abs(expiresAt - currentDate) >= ITEM_PERSIST_LIFETIME;

    if (isExpired || data.length === 0 || payload.language !== language) {
      const response = await thunkHandler(dispatch, getExercises, payload);
      return {
        type: REHYDRATE,
        expiresAt: currentDate + ITEM_PERSIST_LIFETIME,
        ...response,
      };
    }

    return { type: PERSIST, data };
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});
