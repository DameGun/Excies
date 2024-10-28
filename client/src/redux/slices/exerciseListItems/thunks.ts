import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  createExerciseListItem,
  deleteExerciseListItem,
  getExerciseListItems,
} from '@/helpers/api';
import { thunkHandler } from '@/redux/thunkHandler';

export const thunkGetExerciseListItems = createAsyncThunk(
  'getExerciseListItems',
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      const response = await thunkHandler(getExerciseListItems, payload);
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const thunkCreateExerciseListItem = createAsyncThunk(
  'createExerciseListItem',
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      const response = await thunkHandler(createExerciseListItem, payload);
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const thunkDeleteExerciseListItem = createAsyncThunk(
  'deleteExerciseListItem',
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      const response = await thunkHandler(deleteExerciseListItem, payload);
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
