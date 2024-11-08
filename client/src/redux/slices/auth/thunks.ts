import { createAsyncThunk } from '@reduxjs/toolkit';

import { login, register } from '@/api/endpoints/auth';
import {
  checkToken,
  getJwtPayload,
  removeJwtPayload,
  removeToken,
  storeJwtPayload,
  storeToken,
} from '@/api/endpoints/token';
import { thunkHandler } from '@/redux/thunkHandler';
import type { ApiError } from '@/types/api';
import type { LoginDTO, RegisterDTO } from '@/types/auth';
import type { TypedThunkApi } from '@/types/redux';
import type { JWTPayload } from '@/types/token';

export const thunkAppOpen = createAsyncThunk<JWTPayload, void, TypedThunkApi>(
  'appOpen',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await thunkHandler(dispatch, checkToken);

      const response = await thunkHandler(dispatch, getJwtPayload);

      return response;
    } catch (err) {
      const { message } = err as ApiError;
      return rejectWithValue(message);
    }
  }
);

export const thunkLogin = createAsyncThunk<JWTPayload, LoginDTO, TypedThunkApi>(
  'login',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await thunkHandler(dispatch, login, payload);
      const token = response.accessToken;

      await thunkHandler(dispatch, storeToken, token);
      await thunkHandler(dispatch, storeJwtPayload, {
        username: response.username,
        user_id: response.user_id,
      });

      return response;
    } catch (err) {
      const { message } = err as ApiError;
      return rejectWithValue(message);
    }
  }
);

export const thunkRegister = createAsyncThunk<JWTPayload, RegisterDTO, TypedThunkApi>(
  'register',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await thunkHandler(dispatch, register, payload);
      const token = response.accessToken;

      await thunkHandler(dispatch, storeToken, token);
      await thunkHandler(dispatch, storeJwtPayload, {
        username: response.username,
        user_id: response.user_id,
      });

      return response;
    } catch (err) {
      const { message } = err as ApiError;
      return rejectWithValue(message);
    }
  }
);

export const thunkLogout = createAsyncThunk<void, void, TypedThunkApi>(
  'logout',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await thunkHandler(dispatch, removeToken);
      await thunkHandler(dispatch, removeJwtPayload);
    } catch (err) {
      const { message } = err as ApiError;
      return rejectWithValue(message);
    }
  }
);
