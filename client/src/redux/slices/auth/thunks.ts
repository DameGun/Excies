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
import { ResponseStatus } from '@/constants/api';
import { thunkHandler } from '@/redux/thunkHandler';
import { ApiError } from '@/types/api';
import { LoginDTO, RegisterDTO } from '@/types/auth';
import { TypedThunkApi } from '@/types/redux';

import { onAuth, onLogout } from '.';

export const thunkAppOpen = createAsyncThunk<void, void, TypedThunkApi>(
  'appOpen',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await thunkHandler(dispatch, checkToken);

      const response = await getJwtPayload();

      if (response.status === ResponseStatus.Fullfiled) {
        dispatch(onAuth(response.data));
      }
    } catch (err) {
      const { message } = err as ApiError;
      return rejectWithValue(message);
    }
  }
);

export const thunkLogin = createAsyncThunk<void, LoginDTO, TypedThunkApi>(
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
      dispatch(onAuth({ username: response.username, user_id: response.user_id }));
    } catch (err) {
      const { message } = err as ApiError;
      return rejectWithValue(message);
    }
  }
);

export const thunkRegister = createAsyncThunk<void, RegisterDTO, TypedThunkApi>(
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
      dispatch(onAuth({ username: response.username, user_id: response.user_id }));
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
      dispatch(onLogout());
    } catch (err) {
      const { message } = err as ApiError;
      return rejectWithValue(message);
    }
  }
);
