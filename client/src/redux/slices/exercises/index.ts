import { createSlice } from '@reduxjs/toolkit';

import { thunkGetExercises } from './thunks';

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    data: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(thunkGetExercises.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default exercisesSlice.reducer;
