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
import { TypedThunkApi } from '@/types/redux';

export const thunkGetExerciseLists = createAsyncThunk<
  ExerciseList[],
  RequiredUsernameParameter,
  TypedThunkApi
>('getExerciseLists', async (payload, { dispatch, rejectWithValue }) => {
  try {
    const response = await thunkHandler(dispatch, getExerciseLists, payload);
    return response;
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});

export const thunkCreateExerciseList = createAsyncThunk<
  ExerciseList,
  CreateExerciseListDTO,
  TypedThunkApi
>('createExerciseList', async (payload, { dispatch, rejectWithValue }) => {
  try {
    const response = await thunkHandler(dispatch, createExerciseList, payload);
    return response;
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});

export const thunkUpdateExerciseList = createAsyncThunk<
  ExerciseList,
  UpdateExerciseListDTO,
  TypedThunkApi
>('updateExerciseList', async (payload, { dispatch, rejectWithValue }) => {
  try {
    const response = await thunkHandler(dispatch, updateExerciseList, payload);
    return response;
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});

export const thunkDeleteExerciseList = createAsyncThunk<void, DeleteExerciseListDTO, TypedThunkApi>(
  'deleteExerciseList',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      await thunkHandler(dispatch, deleteExerciseList, payload);
    } catch (err) {
      const { message } = err as ApiError;
      return rejectWithValue(message);
    }
  }
);
