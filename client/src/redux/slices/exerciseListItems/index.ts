import { createSlice } from '@reduxjs/toolkit';

import {
  thunkCreateExerciseListItem,
  thunkDeleteExerciseListItem,
  thunkGetExerciseListItems,
} from './thunks';

const exerciseListItemsSlice = createSlice({
  name: 'exerciseListItems',
  initialState: {
    data: [],
    currentList: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(thunkGetExerciseListItems.fulfilled, (state, action) => {
      state.data = action.payload.length ? action.payload : [];
    }),
      builder.addCase(thunkCreateExerciseListItem.fulfilled, (state, action) => {
        state.data.push(action.payload);
      });

    builder.addCase(thunkDeleteExerciseListItem.fulfilled, (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.meta.arg.payload.list_item_id
      );
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    });
  },
});

export default exerciseListItemsSlice.reducer;
