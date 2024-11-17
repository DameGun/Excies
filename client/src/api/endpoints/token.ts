import * as SecureStore from 'expo-secure-store';

import { ACCESS_TOKEN_KEY, TokenStorageKeys } from '@/constants/token';
import { handleError } from '@/helpers/errorHandler';
import { handleResult } from '@/helpers/resultHandler';
import type { ApiResult } from '@/types/api';
import type { JWTPayload } from '@/types/token';

import { axiosClient } from '..';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getJwtPayload(): ApiResult<JWTPayload> {
  try {
    const username = await SecureStore.getItemAsync(TokenStorageKeys.Username);
    const user_id = await SecureStore.getItemAsync(TokenStorageKeys.UserId);
    const is_metric_system_choosed = await getIsMetricSystemChoosed();

    if (!username || !user_id) {
      return handleError(new Error('Storage doesnt have user credentials'));
    }

    return handleResult({ username, user_id, is_metric_system_choosed });
  } catch (err) {
    return handleError(err);
  }
}

export async function storeJwtPayload({
  username,
  user_id,
  is_metric_system_choosed,
}: JWTPayload): ApiResult {
  try {
    await SecureStore.setItemAsync(TokenStorageKeys.Username, username);
    await SecureStore.setItemAsync(TokenStorageKeys.UserId, user_id);
    await setIsMetricSystemChoosed(is_metric_system_choosed);

    return handleResult();
  } catch (err) {
    return handleError(err);
  }
}

export async function removeJwtPayload(): ApiResult {
  try {
    await SecureStore.deleteItemAsync(TokenStorageKeys.Username);
    await SecureStore.deleteItemAsync(TokenStorageKeys.UserId);
    await AsyncStorage.removeItem(TokenStorageKeys.isMetricSystemChoosed);

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

async function getIsMetricSystemChoosed() {
  const value = await AsyncStorage.getItem(TokenStorageKeys.isMetricSystemChoosed);
  return /true/i.test(value!);
}

export async function setIsMetricSystemChoosed(is_metric_system_choosed: boolean) {
  await AsyncStorage.setItem(TokenStorageKeys.isMetricSystemChoosed, `${is_metric_system_choosed}`);
}
