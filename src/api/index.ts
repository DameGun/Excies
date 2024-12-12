import axios from 'axios';

export const API_ROOT = process.env.EXPO_PUBLIC_API_URL;

export const axiosClient = axios.create({
  baseURL: API_ROOT,
  responseType: 'json',
});
