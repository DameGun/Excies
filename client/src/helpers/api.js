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

export async function createExerciseList({ username, name, description }) {
  try {
    const response = await axiosClient.post(`/${username}/exercise-lists`, { name, description });
    return response.data;
  }
  catch (err) {
    return err;
  }
}

export async function updateExerciseList({ username, id, name, description }) {
  try {
    const response = await axiosClient.patch(`/${username}/exercise-lists/${id}`, { name, description });
    return response.data;
  }
  catch (err) {
    return err;
  }
}

export async function deleteExerciseList({ username, id }) {
  try {
    const response = await axiosClient.delete(`/${username}/exercise-lists/${id}`);
    return response.data;
  }
  catch (err) {
    return err;
  }
}


// Exercise List Items requests

export async function getExerciseListItems({ id, username }) {
  try {
    const response = await axiosClient.get(`/${username}/exercise-lists/${id}/items`)
    return response.data;
  }
  catch (err) {
    return err;
  }
}

export async function createExerciseListItem({ list_id, username, exercise_id }) {
  try {
    const response = await axiosClient.post(`/${username}/exercise-lists/${list_id}/items`, { exercise_id });
    return response.data;
  }
  catch (err) {
    return err;
  }
}

export async function deleteExerciseListItem({ list_id, username, list_item_id }) {
  try {
    const response = await axiosClient.delete(`/${username}/exercise-lists/${list_id}/items/${list_item_id}`);
    return response.data;
  }
  catch (err) {
    return err;
  }
}


// Exercises requests

export async function getExercises() {
  try {
    const response = await axiosClient.get('/exercises');
    return response.data;
  }
  catch (err) {
    return err;
  }
}