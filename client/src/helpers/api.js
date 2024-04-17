import axios from "axios";
import * as SecureStore from 'expo-secure-store';

export const STAGING = true;

export const API_ROOT = process.env.EXPO_PUBLIC_DEV_API_URL_HOME;

export const axiosClient = axios.create({
  baseURL: API_ROOT,
  responseType: 'json'
});

// Auth requests

export async function storeToken(token) {
  try {
    await SecureStore.setItemAsync('Token', token);
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;
  }
  catch (err) {
    return err.message;
  }
}

export async function removeToken() {
  try {
    await SecureStore.deleteItemAsync('Token');
    axiosClient.defaults.headers.common['Authorization'] = '';
  }
  catch (err) {
    return err.message;
  }
}

export async function login({ username, password }) {
  try {
    const response = await axiosClient.post('/login', { username, password });
    return response.data
  }
  catch (err) {
    return err.message;
  }
}