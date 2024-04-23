import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { thunkHandler } from "../thunkHandler";
import { getExerciseListItems, getExerciseLists } from "../../helpers/api";

export const thunkGetExerciseLists = createAsyncThunk('getExerciseLists', async (params, { dispatch, rejectWithValue }) => {
    try {
        const response = await thunkHandler({ apicall: getExerciseLists, payload: params.payload }, { dispatch });
        return response;
    }
    catch (err) {
        return rejectWithValue(err.message);
    }
})

export const thunkGetExerciseListItems = createAsyncThunk('getExerciseListItems', async (params, { dispatch, rejectWithValue }) => {
    try {
        const response = await thunkHandler({ apicall: getExerciseListItems, payload: params.payload }, { dispatch });
        return response
    }
    catch (err) {
        return rejectWithValue(err.message);
    }
})

const exerciseListsSlice = createSlice({
    name: 'exerciseLists',
    initialState: {
        status: 'idle',
        allListsData: null,
        listData: null
    },
    extraReducers(builder) {
        builder.addCase(thunkGetExerciseLists.fulfilled, (state, action) => {
            state.allListsData = action.payload
            state.status = 'idle';
        }),
        builder.addCase(thunkGetExerciseLists.pending, (state) => {
            state.status = 'loading';
        }),
        builder.addCase(thunkGetExerciseLists.rejected, (state, action) => {
            if(action.payload == '401') {
                state.status = 'unauthorized';
            }
            else {
                state.status = 'error';
            }
        }),
        builder.addCase(thunkGetExerciseListItems.fulfilled, (state, action) => {
            console.log(action.payload);
            state.listData = action.payload;
            state.status = 'idle';
        }),
        builder.addCase(thunkGetExerciseListItems.pending, (state) => {
            state.status = 'loading';
        })
        builder.addCase(thunkGetExerciseListItems.rejected, (state) => {
            state.status = 'idle'
        })
    }
})

export default exerciseListsSlice.reducer;