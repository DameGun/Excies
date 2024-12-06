import { createSelector, createSlice } from '@reduxjs/toolkit';

import type { DetailedExerciseListItemState } from '@/types/detailedExerciseListItem';
import type { RootState } from '@/types/redux';
import { dateParser } from '@/utils/dateParser';

import {
  thunkCreateDetailedExerciseListItem,
  thunkDeleteDetailedExerciseListItem,
  thunkGetDetailedExerciseListItems,
  thunkUpdateDetailedExerciseListItem,
} from './thunks';

const initialState: DetailedExerciseListItemState = {
  data: [],
};

const detailedExerciseListItemsSlice = createSlice({
  name: 'detailedExerciseListItems',
  initialState,
  extraReducers(builder) {
    builder.addCase(thunkGetDetailedExerciseListItems.fulfilled, (state, action) => {
      if (action.payload.length) {
        state.data = action.payload.map((group) => {
          group.title = dateParser(group.title);
          return group;
        });
      } else {
        state.data = [];
      }
    });
    builder.addCase(thunkCreateDetailedExerciseListItem.fulfilled, (state, action) => {
      let parsedDate = dateParser(action.payload.date);

      const index = state.data.findIndex((group) => group.title === parsedDate);

      if (index !== -1) {
        state.data[index].data.push(action.payload);
      } else {
        state.data.push({ title: parsedDate, data: [action.payload] });
      }
    });
    builder.addCase(thunkUpdateDetailedExerciseListItem.fulfilled, (state, action) => {
      let parsedDate = dateParser(action.payload.date);

      const index = state.data.findIndex((group) => group.title === parsedDate);

      if (index !== -1) {
        let itemIndex = state.data[index].data.findIndex((item) => item.id === action.payload.id);
        state.data[index].data[itemIndex] = action.payload;
      } else {
        state.data.push({ title: parsedDate, data: [action.payload] });
      }
    });
    builder.addCase(thunkDeleteDetailedExerciseListItem.fulfilled, (state, action) => {
      for (let i = 0; i < state.data.length; i++) {
        const index = state.data[i].data.findIndex((item) => item.id === action.meta.arg.id);

        if (index !== -1) {
          if (state.data[i].data.length === 1) {
            state.data.splice(i, 1);
          } else {
            state.data[i].data.splice(index, 1);
          }
          break;
        }
      }
    });
  },
  reducers: {},
});

const selectDetailedExerciseListItemId = (state: RootState, id?: string) => id;

export const selectDetailedExerciseListItems = (state: RootState) =>
  state.detailedExerciseListItems.data;

export const selectDetailedExerciseListItemById = createSelector(
  [selectDetailedExerciseListItems, selectDetailedExerciseListItemId],
  (groups, id) => {
    let searchableItem;

    for (const group of groups) {
      const buff = group.data.find((detailed) => detailed.id === id);
      if (buff) searchableItem = buff;
    }

    return searchableItem;
  }
);

export default detailedExerciseListItemsSlice.reducer;
