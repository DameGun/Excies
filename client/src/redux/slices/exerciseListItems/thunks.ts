import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  createExerciseListItem,
  deleteExerciseListItem,
  getExerciseListItemById,
  getExerciseListItems,
} from '@/api/endpoints/exerciseListItem';
import { thunkHandler } from '@/redux/thunkHandler';
import type { ApiError } from '@/types/api';
import type {
  CreateExerciseListItemDTO,
  DeleteExerciseListItemDTO,
  ExerciseListItem,
  GetExerciseListItemByIdDTO,
  GetExerciseListItemsDTO,
} from '@/types/exerciseListItem';
import type { TypedThunkApi } from '@/types/redux';

export const thunkGetExerciseListItems = createAsyncThunk<
  ExerciseListItem[],
  GetExerciseListItemsDTO,
  TypedThunkApi
>('getExerciseListItems', async (payload, { dispatch, rejectWithValue }) => {
  try {
    const response = await thunkHandler(dispatch, getExerciseListItems, payload);
    return response;
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});

export const thunkGetExerciseListItemById = createAsyncThunk<
  ExerciseListItem,
  GetExerciseListItemByIdDTO,
  TypedThunkApi
>('getExerciseListItemById', async (payload, { dispatch, rejectWithValue }) => {
  try {
    const response = await thunkHandler(dispatch, getExerciseListItemById, payload);
    return response;
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});

export const thunkCreateExerciseListItem = createAsyncThunk<
  ExerciseListItem,
  CreateExerciseListItemDTO,
  TypedThunkApi
>('createExerciseListItem', async (payload, { dispatch, rejectWithValue }) => {
  try {
    const response = await thunkHandler(dispatch, createExerciseListItem, payload);
    return response;
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});

export const thunkDeleteExerciseListItem = createAsyncThunk<
  void,
  DeleteExerciseListItemDTO,
  TypedThunkApi
>('deleteExerciseListItem', async (payload, { dispatch, rejectWithValue }) => {
  try {
    await thunkHandler(dispatch, deleteExerciseListItem, payload);
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});
