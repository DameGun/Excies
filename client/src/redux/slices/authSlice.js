import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { storeToken, removeToken } from "../../helpers/api";
import { thunkHandler } from "../thunkHandler.js";

export const thunkLogin = createAsyncThunk('login', async (params, { dispatch }) => {
    const response = await thunkHandler(params, { dispatch });
    const token = response.accessToken;

    await storeToken(token);
    dispatch(onLogin({ token, username: params.payload.username }));
})

export const thunkLogout = createAsyncThunk('logout', async (params, { dispatch }) => {
    await removeToken();
    dispatch(onLogout())
})

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        token: null,
        username: null
    },
    reducers: {
        onLogin: (state, action) => {
            state.token = action.payload.token;
            state.username = action.payload.username;
            state.isLoggedIn = true;
        },
        onLogout: (state) => {
            state.isLoggedIn = false;
        }
    }
})

export const { onLogin, onLogout } = authSlice.actions;

export default authSlice.reducer;