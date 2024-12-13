import { StorageItemsKeys } from '@/constants/token';
import { handleError } from '@/helpers/errorHandler';
import { handleResult } from '@/helpers/resultHandler';
import type { ApiResult } from '@/types/api';
import type { JWTPayload } from '@/types/token';
import { getStorageItem, removeStorageItem, setStorageItem } from '@/utils/storage';

import { axiosClient } from '..';

export async function getJwtPayload(): ApiResult<JWTPayload> {
  try {
    const username = await getStorageItem(StorageItemsKeys.Username);
    const userId = await getStorageItem(StorageItemsKeys.UserId);
    const isMetricSystemChoosed = await getIsMetricSystemChoosed();

    if (!username || !userId) {
      return handleError(new Error('Storage doesnt have user credentials'));
    }

    return handleResult({ username, userId, isMetricSystemChoosed });
  } catch (err) {
    return handleError(err);
  }
}

export async function storeJwtPayload({
  username,
  userId,
  isMetricSystemChoosed,
}: JWTPayload): ApiResult {
  try {
    await setStorageItem(StorageItemsKeys.Username, username);
    await setStorageItem(StorageItemsKeys.UserId, userId);
    await setStorageItem(StorageItemsKeys.IsMetricSystemChoosed, String(isMetricSystemChoosed));

    return handleResult();
  } catch (err) {
    return handleError(err);
  }
}

export async function removeJwtPayload(): ApiResult {
  try {
    await removeStorageItem(StorageItemsKeys.Username);
    await removeStorageItem(StorageItemsKeys.UserId);
    await removeStorageItem(StorageItemsKeys.IsMetricSystemChoosed);

    return handleResult();
  } catch (err) {
    return handleError(err);
  }
}

export async function checkToken(): ApiResult {
  try {
    const token = await getStorageItem(StorageItemsKeys.AccessToken);

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
    await setStorageItem(StorageItemsKeys.AccessToken, token);

    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return handleResult();
  } catch (err) {
    return handleError(err);
  }
}

export async function removeToken(): ApiResult {
  try {
    await removeStorageItem(StorageItemsKeys.AccessToken);
    axiosClient.defaults.headers.common['Authorization'] = '';

    return handleResult();
  } catch (err) {
    return handleError(err);
  }
}

async function getIsMetricSystemChoosed() {
  const value = await getStorageItem(StorageItemsKeys.IsMetricSystemChoosed);
  return /true/i.test(value!);
}
