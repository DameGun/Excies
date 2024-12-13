import { createSlice } from '@reduxjs/toolkit';

import type { ExerciseListItemState } from '@/types/exerciseListItem';
import type { RootState } from '@/types/redux';

import {
  thunkCreateExerciseListItem,
  thunkDeleteExerciseListItem,
  thunkGetExerciseListItemById,
  thunkGetExerciseListItems,
} from './thunks';

const initialState: ExerciseListItemState = {
  data: [],
};

const exerciseListItemsSlice = createSlice({
  name: 'exerciseListItems',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(thunkGetExerciseListItems.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(thunkCreateExerciseListItem.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
    builder.addCase(thunkDeleteExerciseListItem.fulfilled, (state, action) => {
      const index = state.data.findIndex((item) => item.id === action.meta.arg.listItemId);
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    });
    builder.addCase(thunkGetExerciseListItemById.fulfilled, (state, action) => {
      const updatedListItem = action.payload;

      state.data = state.data.map((listItem) => {
        if (listItem.id === updatedListItem.id) {
          return updatedListItem;
        }

        return listItem;
      });
    });
  },
});

export const selectExerciseListItems = (state: RootState) => state.exerciseListItems.data;

export default exerciseListItemsSlice.reducer;
