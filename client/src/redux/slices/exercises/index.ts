import { createSlice } from '@reduxjs/toolkit';

import { ExerciseState } from '@/types/exercise';

import { thunkGetExercises } from './thunks';

const initialState: ExerciseState = {
  data: [],
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(thunkGetExercises.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default exercisesSlice.reducer;
