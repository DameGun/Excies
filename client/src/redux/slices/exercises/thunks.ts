import { createAsyncThunk } from '@reduxjs/toolkit';

import { getExercises } from '@/api/endpoints/exercise';
import { thunkHandler } from '@/redux/thunkHandler';
import { ApiError } from '@/types/api';
import { Exercise, GetExercisesDTO } from '@/types/exercise';
import { TypedThunkApi } from '@/types/redux';

export const thunkGetExercises = createAsyncThunk<Exercise[], GetExercisesDTO, TypedThunkApi>(
  'getExercises',
  async (_, { dispatch, rejectWithValue, getState }) => {
    try {
      const {
        exercises: { data },
      } = getState();

      if (data.length === 0) {
        const response = await thunkHandler(dispatch, getExercises);
        return response;
      }

      return data;
    } catch (err) {
      const { message } = err as ApiError;
      return rejectWithValue(message);
    }
  }
);
