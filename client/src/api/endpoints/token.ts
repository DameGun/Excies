import * as SecureStore from 'expo-secure-store';

import { ACCESS_TOKEN_KEY, TokenStorageKeys } from '@/constants/token';
import { handleError } from '@/helpers/errorHandler';
import { handleResult } from '@/helpers/resultHandler';
import type { ApiResult } from '@/types/api';
import type { JWTPayload } from '@/types/token';

import { axiosClient } from '..';

export async function getJwtPayload(): ApiResult<JWTPayload> {
  try {
    const username = await SecureStore.getItemAsync(TokenStorageKeys.USERNAME);
    const user_id = await SecureStore.getItemAsync(TokenStorageKeys.USERID);

    if (!username || !user_id) {
      return handleError(new Error('Storage doesnt have user credentials'));
    }

    return handleResult({ username, user_id });
  } catch (err) {
    return handleError(err);
  }
}

export async function storeJwtPayload({ username, user_id }: JWTPayload): ApiResult {
  try {
    await SecureStore.setItemAsync(TokenStorageKeys.USERNAME, username);
    await SecureStore.setItemAsync(TokenStorageKeys.USERID, user_id);

    return handleResult();
  } catch (err) {
    return handleError(err);
  }
}

export async function removeJwtPayload(): ApiResult {
  try {
    await SecureStore.deleteItemAsync(TokenStorageKeys.USERNAME);
    await SecureStore.deleteItemAsync(TokenStorageKeys.USERID);

    return handleResult();
  } catch (err) {
    return handleError(err);
  }
}

export async function checkToken(): ApiResult {
  try {
    const token = await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);

    if (token) {
      axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return handleResult();
    }

    return handleError(new Error('Token doesnt exist'));
  } catch (err) {
    return handleError(err);
  }
}

export async function storeToken(token: string): ApiResult {
  try {
    await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, token);
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return handleResult();
  } catch (err) {
    return handleError(err);
  }
}

export async function removeToken(): ApiResult {
  try {
    await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
    axiosClient.defaults.headers.common['Authorization'] = '';

    return handleResult();
  } catch (err) {
    return handleError(err);
  }
}
