import { TokenStorageKeys } from '@/constants/token';
import { handleError } from '@/helpers/errorHandler';
import { handleResult } from '@/helpers/resultHandler';
import type { ApiResult } from '@/types/api';
import type { JWTPayload } from '@/types/token';

import { axiosClient } from '..';
import { getStorageItem, removeStorageItem, setStorageItem } from '@/utils/storage';

export async function getJwtPayload(): ApiResult<JWTPayload> {
  try {
    const username = await getStorageItem(TokenStorageKeys.Username);
    const user_id = await getStorageItem(TokenStorageKeys.UserId);
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
    await setStorageItem(TokenStorageKeys.Username, username);
    await setStorageItem(TokenStorageKeys.UserId, user_id);
    await setStorageItem(TokenStorageKeys.IsMetricSystemChoosed, String(is_metric_system_choosed));

    return handleResult();
  } catch (err) {
    return handleError(err);
  }
}

export async function removeJwtPayload(): ApiResult {
  try {
    await removeStorageItem(TokenStorageKeys.Username);
    await removeStorageItem(TokenStorageKeys.UserId);
    await removeStorageItem(TokenStorageKeys.IsMetricSystemChoosed);

    return handleResult();
  } catch (err) {
    return handleError(err);
  }
}

export async function checkToken(): ApiResult {
  try {
    const token = await getStorageItem(TokenStorageKeys.AccessToken)

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
    await setStorageItem(TokenStorageKeys.AccessToken, token);

    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return handleResult();
  } catch (err) {
    return handleError(err);
  }
}

export async function removeToken(): ApiResult {
  try {
    await removeStorageItem(TokenStorageKeys.AccessToken);
    axiosClient.defaults.headers.common['Authorization'] = '';

    return handleResult();
  } catch (err) {
    return handleError(err);
  }
}

async function getIsMetricSystemChoosed() {
  const value = await getStorageItem(TokenStorageKeys.IsMetricSystemChoosed);
  return /true/i.test(value!);
}
