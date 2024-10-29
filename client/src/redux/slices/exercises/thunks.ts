import { createAsyncThunk } from '@reduxjs/toolkit';

import { getExercises } from '@/api/endpoints/exercise';
import { thunkHandler } from '@/redux/thunkHandler';
import { ApiError } from '@/types/api';
import { Exercise } from '@/types/exercise';

export const thunkGetExercises = createAsyncThunk<Exercise[]>(
  'getExercises',
  async (_, { rejectWithValue }) => {
    try {
      const response = await thunkHandler(getExercises);
      return response;
    } catch (err) {
      const { message } = err as ApiError;
      return rejectWithValue(message);
    }
  }
);
