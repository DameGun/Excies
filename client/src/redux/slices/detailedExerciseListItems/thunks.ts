import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  createDetailedExerciseListItem,
  deleteDetailedExerciseListItem,
  getDetailedExerciseListItems,
  updateDetailedExerciseListItem,
} from '@/helpers/api';
import { thunkHandler } from '@/redux/thunkHandler';

export const thunkGetDetailedExerciseListItems = createAsyncThunk(
  'getDetailedExerciseListItems',
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      const response = await thunkHandler(getDetailedExerciseListItems, payload);
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const thunkCreateDetailedExerciseListItem = createAsyncThunk(
  'createDetailedExerciseListItem',
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      const response = await thunkHandler(createDetailedExerciseListItem, payload);
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const thunkUpdateDetailedExerciseListItem = createAsyncThunk(
  'updateDetailedExerciseListItem',
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      const response = await thunkHandler(updateDetailedExerciseListItem, payload);
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const thunkDeleteDetailedExerciseListItem = createAsyncThunk(
  'deleteDetailedExerciseListItem',
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      const response = await thunkHandler(deleteDetailedExerciseListItem, payload);
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
