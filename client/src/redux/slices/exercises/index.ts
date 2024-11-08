import { createSelector, createSlice } from '@reduxjs/toolkit';

import type { ExerciseState } from '@/types/exercise';
import type { RootState } from '@/types/redux';

import { thunkGetExercises } from './thunks';

import { selectExerciseListItems } from '../exerciseListItems';

const initialState: ExerciseState = {
  data: [],
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(thunkGetExercises.fulfilled, (state, action) => {
      if (state.data.length === 0) state.data = action.payload;
    });
  },
});

export const selectExercises = (state: RootState) => state.exercises.data;
export const selectExercisesDiffSelector = createSelector(
  [selectExerciseListItems, selectExercises],
  (listItems, exercises) => {
    return exercises.filter(({ id }) => !listItems.some(({ exercise_id }) => id === exercise_id));
  }
);

export default exercisesSlice.reducer;
