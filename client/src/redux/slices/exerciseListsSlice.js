import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { thunkHandler } from "../thunkHandler";

export const thunkGetExerciseLists = createAsyncThunk('getExerciseLists', async (params, { dispatch, rejectWithValue }) => {
    try {
        const response = await thunkHandler(params, { dispatch });
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
        data: null
    },
    extraReducers(builder) {
        builder.addCase(thunkGetExerciseLists.fulfilled, (state, action) => {
            state.data = action.payload;
        }),
        builder.addCase(thunkGetExerciseLists.rejected, (state, action) => {
            if(action.payload == '401') {
                state.status = 'unauthorized';
            }
            else {
                state.status = 'error';
            }
        })
    }
})

export default exerciseListsSlice.reducer;