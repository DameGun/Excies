import * as SecureStore from 'expo-secure-store';

import { ACCESS_TOKEN_KEY, TokenStorageKeys } from '@/constants/token';
import { JWTPayload } from '@/types/token';

import { axiosClient } from '..';

export async function getJwtPayload(): Promise<JWTPayload> {
  const username = await SecureStore.getItemAsync(TokenStorageKeys.USERNAME);
  const user_id = await SecureStore.getItemAsync(TokenStorageKeys.USERID);

  if (!username || !user_id) {
    throw new Error('Storage doesnt have user credentials');
  }

  return { username, user_id };
}

export async function storeJwtPayload({ username, user_id }: JWTPayload) {
  await SecureStore.setItemAsync(TokenStorageKeys.USERNAME, username);
  await SecureStore.setItemAsync(TokenStorageKeys.USERID, user_id);
}

export async function removeJwtPayload() {
  await SecureStore.deleteItemAsync(TokenStorageKeys.USERNAME);
  await SecureStore.deleteItemAsync(TokenStorageKeys.USERID);
}

export async function checkToken() {
  const token = await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);

  if (token) {
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return true;
  }

  return false;
}

export async function storeToken(token: string) {
  try {
    await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, token);
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } catch (err) {
    return err;
  }
}

export async function removeToken() {
  try {
    await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
    axiosClient.defaults.headers.common['Authorization'] = '';
  } catch (err) {
    return err;
  }
}
