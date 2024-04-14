import axios from "axios";

export const STAGING = true;

export const API_ROOT = process.env.EXPO_PUBLIC_DEV_API_URL;

export const axiosClient = axios.create({
  baseURL: API_ROOT,
  responseType: 'json'
});

// Exercises requests

export async function getExercises() {
  try {
    const response = await axiosClient.get("/exercises");
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
