import { createAsyncThunk } from '@reduxjs/toolkit';

import { getExercises } from '@/helpers/api';
import { thunkHandler } from '@/redux/thunkHandler';

export const thunkGetExercises = createAsyncThunk(
  'getExercises',
  async (_, { rejectWithValue }) => {
    try {
      const response = await thunkHandler(getExercises);
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
