import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  checkToken,
  getJwtPayload,
  register,
  removeJwtPayload,
  removeToken,
  storeJwtPayload,
  storeToken,
} from '@/helpers/api';
import { thunkHandler } from '@/redux/thunkHandler';

import { onAuth, onLogout } from '.';

export const thunkAppOpen = createAsyncThunk(
  'appOpen',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const isTokenExists = await thunkHandler(checkToken);

      if (isTokenExists) {
        const { username, user_id } = await getJwtPayload();
        dispatch(onAuth({ username, user_id }));
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const thunkLogin = createAsyncThunk('login', async (_, { dispatch, rejectWithValue }) => {
  try {
    const response = await thunkHandler(checkToken);
    const token = response.accessToken;

    await storeToken(token);
    await storeJwtPayload({ username: response.username, user_id: response.user_id });
    dispatch(onAuth({ username: response.username, user_id: response.user_id }));
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

export const thunkRegister = createAsyncThunk(
  'register',
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      const response = await thunkHandler(register, payload);
      const token = response.accessToken;

      await storeToken(token);
      dispatch(onAuth({ username: response.username, user_id: response.user_id }));
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const thunkLogout = createAsyncThunk('logout', async (_, { dispatch, rejectWithValue }) => {
  try {
    await removeToken();
    await removeJwtPayload();
    dispatch(onLogout());
  } catch (err) {
    return rejectWithValue(err.message);
  }
});
