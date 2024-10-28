import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  createExerciseList,
  deleteExerciseList,
  getExerciseLists,
  updateExerciseList,
} from '@/helpers/api';
import { thunkHandler } from '@/redux/thunkHandler';

import { thunkLogout } from '../auth/thunks';

export const thunkGetExerciseLists = createAsyncThunk(
  'getExerciseLists',
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      const response = await thunkHandler(getExerciseLists, payload);
      return response;
    } catch (err) {
      if (err.message == '401') {
        dispatch(thunkLogout());
      }
      return rejectWithValue(err.message);
    }
  }
);

export const thunkCreateExerciseList = createAsyncThunk(
  'createExerciseList',
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      const response = await thunkHandler(createExerciseList, payload);
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const thunkUpdateExerciseList = createAsyncThunk(
  'updateExerciseList',
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      const response = await thunkHandler(updateExerciseList, payload);
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const thunkDeleteExerciseList = createAsyncThunk(
  'deleteExerciseList',
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      const response = await thunkHandler(deleteExerciseList, payload);
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
