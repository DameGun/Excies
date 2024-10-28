import { createSlice } from '@reduxjs/toolkit';

import { dateParser } from '@/helpers/validate';
import { DetailedExerciseListItem } from '@/types/detailedExerciseListItem';

import {
  thunkCreateDetailedExerciseListItem,
  thunkDeleteDetailedExerciseListItem,
  thunkGetDetailedExerciseListItems,
  thunkUpdateDetailedExerciseListItem,
} from '../detailedExerciseListItemsSlice';

type DetailedExerciseListItemSliceState = {
  data: DetailedExerciseListItem[];
};

const initialState: DetailedExerciseListItemSliceState = {
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
    }),
      builder.addCase(thunkCreateDetailedExerciseListItem.fulfilled, (state, action) => {
        let parsedDate = dateParser(action.payload.date);

        if (state.data) {
          let index = state.data.findIndex((group) => group.title == parsedDate);

          if (index != -1) {
            state.data[index].data.push(action.payload);
          } else {
            state.data.push({ title: parsedDate, data: [action.payload] });
          }
        } else {
          state.data = [{ title: parsedDate, data: action.payload }];
        }
      }),
      builder.addCase(thunkUpdateDetailedExerciseListItem.fulfilled, (state, action) => {
        let parsedDate = dateParser(action.payload.date);

        if (state.data) {
          let index = state.data.findIndex((group) => group.title == parsedDate);

          if (index != -1) {
            let itemIndex = state.data[index].data.findIndex(
              (item) => item.id == action.payload.id
            );
            state.data[index].data[itemIndex] = action.payload;
          } else {
            state.data.push({ title: parsedDate, data: [action.payload] });
          }
        } else {
          state.data = [{ title: parsedDate, data: action.payload }];
        }
      }),
      builder.addCase(thunkDeleteDetailedExerciseListItem.fulfilled, (state, action) => {
        for (let i = 0; i < state.data.length; i++) {
          let index = state.data[i].data.findIndex((item) => item.id == action.meta.arg.payload.id);
          if (index != -1) {
            if (state.data[i].data.length == 1) {
              state.data.splice(i, 1);
            } else {
              state.data[i].data.splice(index, 1);
            }
            return;
          }
        }
      });
  },
  reducers: {},
});

export default detailedExerciseListItemsSlice.reducer;
