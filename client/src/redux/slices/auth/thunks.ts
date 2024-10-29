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

import { onAuth, onLogout } from '.';

export const thunkAppOpen = createAsyncThunk(
  'appOpen',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await thunkHandler(checkToken);

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

export const thunkLogin = createAsyncThunk<void, LoginDTO>(
  'login',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await thunkHandler(login, payload);
      const token = response.accessToken;

      await thunkHandler(storeToken, token);
      await thunkHandler(storeJwtPayload, {
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

export const thunkRegister = createAsyncThunk<void, RegisterDTO>(
  'register',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await thunkHandler(register, payload);
      const token = response.accessToken;

      await thunkHandler(storeToken, token);
      await thunkHandler(storeJwtPayload, {
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

export const thunkLogout = createAsyncThunk('logout', async (_, { dispatch, rejectWithValue }) => {
  try {
    await thunkHandler(removeToken);
    await thunkHandler(removeJwtPayload);
    dispatch(onLogout());
  } catch (err) {
    const { message } = err as ApiError;
    return rejectWithValue(message);
  }
});
