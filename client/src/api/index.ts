import axios from 'axios';

export const API_ROOT = process.env.EXPO_PUBLIC_DEV_API_URL_HOME;

export const axiosClient = axios.create({
  baseURL: API_ROOT,
  responseType: 'json',
});
