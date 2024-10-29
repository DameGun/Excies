import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  createExerciseList,
  deleteExerciseList,
  getExerciseLists,
  updateExerciseList,
} from '@/api/endpoints/exerciseList';
import { thunkHandler } from '@/redux/thunkHandler';
import { ApiError, RequiredUsernameParameter } from '@/types/api';
import {
  CreateExerciseListDTO,
  DeleteExerciseListDTO,
  ExerciseList,
  UpdateExerciseListDTO,
} from '@/types/exerciseList';

export const thunkGetExerciseLists = createAsyncThunk<ExerciseList[], RequiredUsernameParameter>(
  'getExerciseLists',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await thunkHandler(getExerciseLists, payload);
      return response;
    } catch (err) {
      const { message } = err as ApiError;
      return rejectWithValue(message);
    }
  }
);

export const thunkCreateExerciseList = createAsyncThunk<ExerciseList, CreateExerciseListDTO>(
  'createExerciseList',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await thunkHandler(createExerciseList, payload);
      return response;
    } catch (err) {
      const { message } = err as ApiError;
      return rejectWithValue(message);
    }
  }
);

export const thunkUpdateExerciseList = createAsyncThunk<ExerciseList, UpdateExerciseListDTO>(
  'updateExerciseList',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await thunkHandler(updateExerciseList, payload);
      return response;
    } catch (err) {
      const { message } = err as ApiError;
      return rejectWithValue(message);
    }
  }
);

export const thunkDeleteExerciseList = createAsyncThunk<void, DeleteExerciseListDTO>(
  'deleteExerciseList',
  async (payload, { rejectWithValue }) => {
    try {
      await thunkHandler(deleteExerciseList, payload);
    } catch (err) {
      const { message } = err as ApiError;
      return rejectWithValue(message);
    }
  }
);
