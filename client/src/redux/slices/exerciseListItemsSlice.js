import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { thunkHandler } from "../thunkHandler";
import { createExerciseListItem, deleteExerciseListItem, getExerciseListItems } from "../../helpers/api";

export const thunkGetExerciseListItems = createAsyncThunk('getExerciseListItems', async (params, { dispatch, rejectWithValue }) => {
    try {
        const response = await thunkHandler({ apicall: getExerciseListItems, payload: params.payload }, { dispatch });
        return response;
    }
    catch (err) {
        return rejectWithValue(err.message);
    }
})

export const thunkCreateExerciseListItem = createAsyncThunk('createExerciseListItem', async (params, { dispatch, rejectWithValue }) => {
    try {
        const response = await thunkHandler({ apicall: createExerciseListItem, payload: params.payload }, { dispatch });
        return response;
    }
    catch (err) {
        return rejectWithValue(err.message);
    }
})

export const thunkDeleteExerciseListItem = createAsyncThunk('deleteExerciseListItem', async (params, { dispatch, rejectWithValue }) => {
    try {
        const response = await thunkHandler({ apicall: deleteExerciseListItem, payload: params.payload }, { dispatch });
        return response;
    }
    catch (err) {
        return rejectWithValue(err.message);
    }
})

const exerciseListItemsSlice = createSlice({
    name: 'exerciseListItems',
    initialState: {
        data: null,
        currentList: null
    },
    extraReducers(builder) {
        builder.addCase(thunkGetExerciseListItems.fulfilled, (state, action) => {
            state.data = action.payload;
        }),

        builder.addCase(thunkCreateExerciseListItem.fulfilled, (state, action) => {
            state.data.push(action.payload);
        })

        builder.addCase(thunkDeleteExerciseListItem.fulfilled, (state, action) => {
            const index = state.data.findIndex(item => item.id === action.meta.arg.payload.list_item_id);
            if (index !== -1) {
                state.data.splice(index, 1);
            }
        })
    }
})

export default exerciseListItemsSlice.reducer;