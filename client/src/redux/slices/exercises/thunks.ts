import { createAsyncThunk } from '@reduxjs/toolkit';

import { getExercises } from '@/api/endpoints/exercise';
import { thunkHandler } from '@/redux/thunkHandler';
import type { ApiError } from '@/types/api';
import type { ExercisePersist, GetExercisesDTO } from '@/types/exercise';
import type { TypedThunkApi } from '@/types/redux';
import { ITEM_PERSIST_LIFETIME } from '@/constants/persist';
import { PERSIST, REHYDRATE } from 'redux-persist';

export const thunkGetExercises = createAsyncThunk<ExercisePersist, GetExercisesDTO, TypedThunkApi>(
  'getExercises',
  async (payload, { dispatch, rejectWithValue, getState }) => {
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
  }
);
