import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  createDetailedExerciseListItem,
  deleteDetailedExerciseListItem,
  getDetailedExerciseListItems,
  updateDetailedExerciseListItem,
} from '@/api/endpoints/detailedExerciseListItem';
import { thunkHandler } from '@/redux/thunkHandler';
import { ApiError } from '@/types/api';
import {
  CreateDetailedExerciseListItemDTO,
  DeleteDetailedExerciseListItemDTO,
  DetailedExerciseListItem,
  DetailedExerciseListItemsGroup,
  GetDetailedExerciseListItemsDTO,
  UpdateDetailedExerciseListItemDTO,
} from '@/types/detailedExerciseListItem';

export const thunkGetDetailedExerciseListItems = createAsyncThunk<
  DetailedExerciseListItemsGroup[],
  GetDetailedExerciseListItemsDTO
>('getDetailedExerciseListItems', async (payload, { rejectWithValue }) => {
  try {
    const response = await thunkHandler(getDetailedExerciseListItems, payload);
    return response;
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});

export const thunkCreateDetailedExerciseListItem = createAsyncThunk<
  DetailedExerciseListItem,
  CreateDetailedExerciseListItemDTO
>('createDetailedExerciseListItem', async (payload, { rejectWithValue }) => {
  try {
    const response = await thunkHandler(createDetailedExerciseListItem, payload);
    return response;
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});

export const thunkUpdateDetailedExerciseListItem = createAsyncThunk<
  DetailedExerciseListItem,
  UpdateDetailedExerciseListItemDTO
>('updateDetailedExerciseListItem', async (payload, { rejectWithValue }) => {
  try {
    const response = await thunkHandler(updateDetailedExerciseListItem, payload);
    return response;
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});

export const thunkDeleteDetailedExerciseListItem = createAsyncThunk<
  void,
  DeleteDetailedExerciseListItemDTO
>('deleteDetailedExerciseListItem', async (payload, { rejectWithValue }) => {
  try {
    await thunkHandler(deleteDetailedExerciseListItem, payload);
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});
