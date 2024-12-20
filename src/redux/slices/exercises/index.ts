import { createSelector, createSlice } from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';

import { FALLBACK_LNG } from '@/constants/i18n';
import type { ExerciseState } from '@/types/exercise';
import type { RootState } from '@/types/redux';

import { thunkGetExercises } from './thunks';

import { selectExerciseListItems } from '../exerciseListItems';

const initialState: ExerciseState = {
  language: FALLBACK_LNG,
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
        state.language = action.payload.language;
      }
    });
  },
});

export const selectExercises = (state: RootState) => state.exercises.data;
export const selectExercisesDiffSelector = createSelector(
  [selectExerciseListItems, selectExercises],
  (listItems, exercises) => {
    return exercises.filter(
      ({ exerciseId: id }) => !listItems.some(({ exerciseId }) => id === exerciseId)
    );
  }
);

export default exercisesSlice.reducer;
