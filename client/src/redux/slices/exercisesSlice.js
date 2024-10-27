import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getExercises } from '../../helpers/api.js';
import { thunkHandler } from '../thunkHandler';

export const thunkGetExercises = createAsyncThunk(
  'getExercises',
  async (params, { dispatch, rejectWithValue }) => {
    try {
      const response = await thunkHandler({ apicall: getExercises }, { dispatch });
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    data: null,
  },
  extraReducers(builder) {
    builder.addCase(thunkGetExercises.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default exercisesSlice.reducer;
