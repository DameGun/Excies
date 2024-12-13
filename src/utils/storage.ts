import { Platform } from 'react-native';

import * as SecureStore from 'expo-secure-store';

export async function setStorageItem(key: string, value: string) {
  if (Platform.OS === 'web') {
    localStorage.setItem(key, value);
  } else {
    await SecureStore.setItemAsync(key, value);
  }
}

export async function getStorageItem(key: string) {
  let token;

  if (Platform.OS === 'web') {
    token = localStorage.getItem(key);
  } else {
    token = await SecureStore.getItemAsync(key);
  }

  return token;
}

export async function removeStorageItem(key: string) {
  if (Platform.OS === 'web') {
    localStorage.removeItem(key);
  } else {
    await SecureStore.deleteItemAsync(key);
  }
}
