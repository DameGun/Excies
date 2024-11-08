import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  createDetailedExerciseListItem,
  deleteDetailedExerciseListItem,
  getDetailedExerciseListItems,
  updateDetailedExerciseListItem,
} from '@/api/endpoints/detailedExerciseListItem';
import { thunkHandler } from '@/redux/thunkHandler';
import type { ApiError } from '@/types/api';
import type {
  CreateDetailedExerciseListItemDTO,
  DeleteDetailedExerciseListItemDTO,
  DetailedExerciseListItem,
  DetailedExerciseListItemsGroup,
  GetDetailedExerciseListItemsDTO,
  UpdateDetailedExerciseListItemDTO,
} from '@/types/detailedExerciseListItem';
import type { TypedThunkApi } from '@/types/redux';

import { thunkGetExerciseListItemById } from '../exerciseListItems/thunks';

export const thunkGetDetailedExerciseListItems = createAsyncThunk<
  DetailedExerciseListItemsGroup[],
  GetDetailedExerciseListItemsDTO,
  TypedThunkApi
>('getDetailedExerciseListItems', async (payload, { dispatch, rejectWithValue }) => {
  try {
    const response = await thunkHandler(dispatch, getDetailedExerciseListItems, payload);
    return response;
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});

export const thunkCreateDetailedExerciseListItem = createAsyncThunk<
  DetailedExerciseListItem,
  CreateDetailedExerciseListItemDTO,
  TypedThunkApi
>('createDetailedExerciseListItem', async (payload, { dispatch, rejectWithValue }) => {
  try {
    const response = await thunkHandler(dispatch, createDetailedExerciseListItem, payload);

    await dispatch(thunkGetExerciseListItemById({ ...payload, id: payload.list_item_id }));

    return response;
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});

export const thunkUpdateDetailedExerciseListItem = createAsyncThunk<
  DetailedExerciseListItem,
  UpdateDetailedExerciseListItemDTO,
  TypedThunkApi
>('updateDetailedExerciseListItem', async (payload, { dispatch, rejectWithValue }) => {
  try {
    const response = await thunkHandler(dispatch, updateDetailedExerciseListItem, payload);
    return response;
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});

export const thunkDeleteDetailedExerciseListItem = createAsyncThunk<
  void,
  DeleteDetailedExerciseListItemDTO,
  TypedThunkApi
>('deleteDetailedExerciseListItem', async (payload, { dispatch, rejectWithValue }) => {
  try {
    await thunkHandler(dispatch, deleteDetailedExerciseListItem, payload);

    await dispatch(thunkGetExerciseListItemById({ ...payload, id: payload.list_item_id }));
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});
