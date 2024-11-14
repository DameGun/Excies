import { createSelector, createSlice } from '@reduxjs/toolkit';

import type { ExerciseState } from '@/types/exercise';
import type { RootState } from '@/types/redux';

import { thunkGetExercises } from './thunks';

import { selectExerciseListItems } from '../exerciseListItems';
import { REHYDRATE } from 'redux-persist';

const initialState: ExerciseState = {
  data: [],
  expiresAt: 0,
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(thunkGetExercises.fulfilled, (state, action) => {
      const { type } = action.payload;

      if (type === REHYDRATE) {
        state.data = action.payload.data;
        state.expiresAt = action.payload.expiresAt;
      }
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
