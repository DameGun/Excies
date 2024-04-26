import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { thunkHandler } from "../thunkHandler";
import { getExercises } from '../../helpers/api.js';

export const thunkGetExercises = createAsyncThunk('getExercises', async (params, { dispatch, rejectWithValue }) => {
    try {
        const response = await thunkHandler({ apicall: getExercises }, { dispatch });
        return response;
    }
    catch (err) {
        return rejectWithValue(err.message);
    }
})

const exercisesSlice = createSlice({
    name: 'exercises',
    initialState: {
        data: null
    },
    extraReducers(builder) {
        builder.addCase(thunkGetExercises.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export default exercisesSlice.reducer;