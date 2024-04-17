import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../helpers/api";

export const getExercises = createAsyncThunk('exercises', async () => {
    const response = await axiosClient.get('exercises')
    return response.data;
})

export const exercisesSlice = createSlice({
    name: 'exercises',
    initialState: {
        data: null
    },
    reducers: {
        
    },
    extraReducers(builder) {
        builder.addCase(getExercises.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
})

export default exercisesSlice.reducer;