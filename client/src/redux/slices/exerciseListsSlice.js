import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { thunkHandler } from "../thunkHandler";
import { createExerciseList, deleteExerciseList, getExerciseLists, updateExerciseList } from "../../helpers/api";
import { thunkLogout } from "./authSlice";

export const thunkGetExerciseLists = createAsyncThunk('getExerciseLists', async (params, { dispatch, rejectWithValue }) => {
    try {
        const response = await thunkHandler({ apicall: getExerciseLists, payload: params.payload }, { dispatch });
        return response;
    }
    catch (err) {
        if(err.message == '401') {
            dispatch(thunkLogout())
        }
        return rejectWithValue(err.message);
    }
})

export const thunkCreateExerciseList = createAsyncThunk('createExerciseList', async (params, { dispatch, rejectWithValue }) => {
    try {
        const response = await thunkHandler({ apicall: createExerciseList, payload: params.payload }, { dispatch });
        return response;
    }
    catch (err) {
        return rejectWithValue(err.message);
    }
})

export const thunkUpdateExerciseList = createAsyncThunk('updateExerciseList', async (params, { dispatch, rejectWithValue }) => {
    try {
        const response = await thunkHandler({ apicall: updateExerciseList, payload: params.payload }, { dispatch });
        return response;
    }
    catch (err) {
        return rejectWithValue(err.message);
    }
})

export const thunkDeleteExerciseList = createAsyncThunk('deleteExerciseList', async (params, { dispatch, rejectWithValue }) => {
    try {
        const response = await thunkHandler({ apicall: deleteExerciseList, payload: params.payload }, { dispatch });
        return response;
    }
    catch (err) {
        return rejectWithValue(err.message);
    }
})

const exerciseListsSlice = createSlice({
    name: 'exerciseLists',
    initialState: {
        status: 'idle',
        data: null,
        currentList: null,
    },
    reducers: {
        setCurrentList: (state, action) => {
            state.currentList = state.data.find(item => item.id == action.payload) || state.currentList;
        }
    },
    extraReducers(builder) {
        builder.addCase(thunkGetExerciseLists.fulfilled, (state, action) => {
            state.data = action.payload;
        }),

        builder.addCase(thunkCreateExerciseList.fulfilled, (state, action) => {
            state.currentList = action.payload;
        })

        builder.addCase(thunkUpdateExerciseList.fulfilled, (state, action) => {
            state.currentList = action.payload;
        })
        builder.addCase(thunkDeleteExerciseList.fulfilled, (state) => {
            state.currentList = null;
        })
    }
})

export const { setCurrentList } = exerciseListsSlice.actions;

export default exerciseListsSlice.reducer;