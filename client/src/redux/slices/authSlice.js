import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { storeToken, removeToken, checkToken, storeJwtPayload, removeJwtPayload, getJwtPayload } from "../../helpers/api";
import { thunkHandler } from "../thunkHandler.js";

export const thunkAppOpen = createAsyncThunk('appOpen', async (params, { dispatch, rejectWithValue }) => {
    try {
        const isTokenExists = await thunkHandler({ apicall: checkToken }, { dispatch });

        if (isTokenExists) {
            const { username, user_id } = await getJwtPayload();
            dispatch(onAuth({ username, user_id }));
        }
    }
    catch (err) {
        return rejectWithValue(err.message);
    }
})

export const thunkLogin = createAsyncThunk('login', async (params, { dispatch, rejectWithValue }) => {
    try {
        const response = await thunkHandler(params, { dispatch });
        const token = response.accessToken;

        await storeToken(token);
        await storeJwtPayload({ username: response.username, user_id: response.user_id})
        dispatch(onAuth({ username: response.username, user_id: response.user_id }));
    }
    catch (err) {
        return rejectWithValue(err.message);
    }
})

export const thunkRegister = createAsyncThunk('register', async (params, { dispatch, rejectWithValue }) => {
    try {
        const response = await thunkHandler(params, { dispatch });
        const token = response.accessToken;
        
        await storeToken(token);
        dispatch(onAuth({ username: response.username, user_id: response.user_id }));
    }
    catch (err) {
        return rejectWithValue(err.message);
    }
})

export const thunkLogout = createAsyncThunk('logout', async (params, { dispatch, rejectWithValue }) => {
    try {
        await removeToken();
        await removeJwtPayload();
        dispatch(onLogout())
    }
    catch (err) {
        return rejectWithValue(err.message);
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        username: null,
        user_id: null
    },
    reducers: {
        onAuth: (state, action) => {
            state.username = action.payload.username;
            state.user_id = action.payload.user_id;
            state.isLoggedIn = true;
        },
        onLogout: (state) => {
            state.username = null;
            state.user_id = null;
            state.isLoggedIn = false;
        }
    }
})

export const { onAuth, onLogout } = authSlice.actions;

export default authSlice.reducer;