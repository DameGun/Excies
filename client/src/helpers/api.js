import axios from "axios";
import * as SecureStore from 'expo-secure-store';

export const STAGING = true;

export const API_ROOT = process.env.EXPO_PUBLIC_DEV_API_URL_HOME;

export const axiosClient = axios.create({
  baseURL: API_ROOT,
  responseType: 'json'
});


// Auth requests

export async function getJwtPayload() {
  const username = await SecureStore.getItemAsync('Username');
  const user_id = await SecureStore.getItemAsync('User_id');
  return { username, user_id };
}

export async function storeJwtPayload({ username, user_id }) {
  await SecureStore.setItemAsync('Username', username);
  await SecureStore.setItemAsync('User_id', user_id);
}

export async function removeJwtPayload() {
  await SecureStore.deleteItemAsync('Username');
  await SecureStore.deleteItemAsync('User_id');
}

export async function checkToken() {
  const token = await SecureStore.getItemAsync('Excies-Token', token);
    
  if (token) {
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return true;
  }

  return false;
}

export async function storeToken(token) {
  try {
    await SecureStore.setItemAsync('Excies-Token', token);
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  catch (err) {
    return err;
  }
}

export async function removeToken() {
  try {
    await SecureStore.deleteItemAsync('Excies-Token');
    axiosClient.defaults.headers.common['Authorization'] = '';
  }
  catch (err) {
    return err;
  }
}

export async function login({ username, password }) {
  try {
    const response = await axiosClient.post('/login', { username, password });
    return response.data
  }
  catch (err) {
    return err;
  }
}

export async function register({ username, password, email }) {
  try {
    const response = await axiosClient.post('/register', { username, password, email });
    return response.data;
  }
  catch (err) {
    return err;
  }
}

// Exercise Lists requests

export async function getExerciseLists({ username }) {
  try {
    const response = await axiosClient.get(`/${username}/exercise-lists`);
    return response.data;
  }
  catch (err) {
    return err;
  }
}