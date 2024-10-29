import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  createExerciseListItem,
  deleteExerciseListItem,
  getExerciseListItems,
} from '@/api/endpoints/exerciseListItem';
import { thunkHandler } from '@/redux/thunkHandler';
import { ApiError } from '@/types/api';
import {
  CreateExerciseListItemDTO,
  DeleteExerciseListItemDTO,
  ExerciseListItem,
  GetExerciseListItemsDTO,
} from '@/types/exerciseListItem';

export const thunkGetExerciseListItems = createAsyncThunk<
  ExerciseListItem[],
  GetExerciseListItemsDTO
>('getExerciseListItems', async (payload, { rejectWithValue }) => {
  try {
    const response = await thunkHandler(getExerciseListItems, payload);
    return response;
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});

export const thunkCreateExerciseListItem = createAsyncThunk<
  ExerciseListItem,
  CreateExerciseListItemDTO
>('createExerciseListItem', async (payload, { rejectWithValue }) => {
  try {
    const response = await thunkHandler(createExerciseListItem, payload);
    return response;
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});

export const thunkDeleteExerciseListItem = createAsyncThunk<void, DeleteExerciseListItemDTO>(
  'deleteExerciseListItem',
  async (payload, { rejectWithValue }) => {
    try {
      await thunkHandler(deleteExerciseListItem, payload);
    } catch (err) {
      const { message } = err as ApiError;
      return rejectWithValue(message);
    }
  }
);
