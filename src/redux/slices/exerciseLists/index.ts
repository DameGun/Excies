import { createSelector, createSlice } from '@reduxjs/toolkit';

import type { ExerciseListState } from '@/types/exerciseList';
import type { RootState } from '@/types/redux';

import {
  thunkCreateExerciseList,
  thunkDeleteExerciseList,
  thunkGetExerciseLists,
  thunkUpdateExerciseList,
} from './thunks';

import {
  thunkCreateExerciseListItem,
  thunkDeleteExerciseListItem,
} from '../exerciseListItems/thunks';

const initialState: ExerciseListState = {
  data: [],
};

const exerciseListsSlice = createSlice({
  name: 'exerciseLists',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(thunkGetExerciseLists.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(thunkCreateExerciseList.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
    builder.addCase(thunkUpdateExerciseList.fulfilled, (state, action) => {
      const updatedList = action.payload;

      state.data = state.data.map((list) => {
        if (updatedList.id === list.id) {
          return {
            ...updatedList,
            itemsCount: list.itemsCount,
          };
        }

        return list;
      });
    });
    builder.addCase(thunkDeleteExerciseList.fulfilled, (state, action) => {
      const listId = action.meta.arg.id;

      state.data = state.data.filter(({ id }) => id !== listId);
    });
    builder.addCase(thunkCreateExerciseListItem.fulfilled, (state, action) => {
      const listId = action.meta.arg.list_id;

      state.data = state.data.map((list) => {
        if (list.id === listId) {
          return {
            ...list,
            itemsCount: list.itemsCount !== undefined ? list.itemsCount + 1 : 0,
          };
        }

        return list;
      });
    });
    builder.addCase(thunkDeleteExerciseListItem.fulfilled, (state, action) => {
      const listId = action.meta.arg.list_id;

      state.data = state.data.map((list) => {
        if (list.id === listId && list.itemsCount) {
          return {
            ...list,
            itemsCount: list.itemsCount - 1,
          };
        }

        return list;
      });
    });
  },
});

const selectExerciseListId = (state: RootState, id?: string) => id;

export const selectExerciseLists = (state: RootState) => state.exerciseLists.data;

export const selectExerciseListById = createSelector(
  [selectExerciseLists, selectExerciseListId],
  (lists, id) => {
    return lists.find((list) => list.id === id);
  }
);

export default exerciseListsSlice.reducer;
