import { createSlice } from '@reduxjs/toolkit';

import { ExerciseListState } from '@/types/exerciseList';

import {
  thunkCreateExerciseList,
  thunkDeleteExerciseList,
  thunkGetExerciseLists,
  thunkUpdateExerciseList,
} from './thunks';

const initialState: ExerciseListState = {
  data: [],
  currentList: null,
};

const exerciseListsSlice = createSlice({
  name: 'exerciseLists',
  initialState,
  reducers: {
    setCurrentList: (state, action) => {
      state.currentList =
        state.data.find((item) => item.id === action.payload) || state.currentList;
    },
  },
  extraReducers(builder) {
    builder.addCase(thunkGetExerciseLists.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(thunkCreateExerciseList.fulfilled, (state, action) => {
      state.currentList = action.payload;
    });
    builder.addCase(thunkUpdateExerciseList.fulfilled, (state, action) => {
      state.currentList = action.payload;
    });
    builder.addCase(thunkDeleteExerciseList.fulfilled, (state) => {
      state.currentList = null;
    });
  },
});

export const { setCurrentList } = exerciseListsSlice.actions;

export default exerciseListsSlice.reducer;
