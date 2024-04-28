import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { thunkHandler } from '../thunkHandler.js';
import { createDetailedExerciseListItem, deleteDetailedExerciseListItem, getDetailedExerciseListItems, updateDetailedExerciseListItem } from '../../helpers/api.js';
import { dateParser } from '../../helpers/utilities.js';

export const thunkGetDetailedExerciseListItems = createAsyncThunk('getDetailedExerciseListItems', 
    async (params, { dispatch, rejectWithValue }) => {
        try {
            const response = await thunkHandler(
                { apicall: getDetailedExerciseListItems, payload: params.payload }, 
                { dispatch }
            );
            return response;
        }
        catch (err) {
            return rejectWithValue(err.message);
        }
    }
)

export const thunkCreateDetailedExerciseListItem = createAsyncThunk('createDetailedExerciseListItem', 
    async (params, { dispatch, rejectWithValue }) => {
        try {
            const response = await thunkHandler(
                { apicall: createDetailedExerciseListItem, payload: params.payload }, 
                { dispatch }
            );
            return response;
        }
        catch (err) {
            return rejectWithValue(err.message);
        }
    }
)

export const thunkUpdateDetailedExerciseListItem = createAsyncThunk('updateDetailedExerciseListItem',
    async (params, { dispatch, rejectWithValue }) => {
        try {
            const response = await thunkHandler(
                { apicall: updateDetailedExerciseListItem, payload: params.payload },
                { dispatch }
            );
            return response;
        }
        catch (err) {
            return rejectWithValue(err.message);
        }
    }
)

export const thunkDeleteDetailedExerciseListItem = createAsyncThunk('deleteDetailedExerciseListItem',
    async (params, { dispatch, rejectWithValue }) => {
        try {
            const response = await thunkHandler(
                { apicall: deleteDetailedExerciseListItem, payload: params.payload },
                { dispatch }
            );
            return response;
        }
        catch (err) {
            return rejectWithValue(err.message);
        }
    }
)

const detailedExerciseListItemsSlice = createSlice({
    name: 'detailedExerciseListItems',
    initialState: {
        data: [],
    },
    extraReducers(builder) {
        builder.addCase(thunkGetDetailedExerciseListItems.fulfilled, (state, action) => {
            if (action.payload.length) {
                state.data = action.payload.map(group => {
                    group.title = dateParser(group.title);
                    return group;
                });
            }
            else {
                state.data = [];
            }
        }),
        builder.addCase(thunkCreateDetailedExerciseListItem.fulfilled, (state, action) => {
            let parsedDate = dateParser(action.payload.date);

            if (state.data) {
                let index = state.data.findIndex(group => group.title == parsedDate);

                if (index != -1) {
                    state.data[index].data.push(action.payload);
                }
                else {
                    state.data.push({ title: parsedDate, data: [ action.payload ]})
                }
            }
            else {
                state.data = [{ title: parsedDate, data: action.payload }]
            }
        }),
        builder.addCase(thunkUpdateDetailedExerciseListItem.fulfilled, (state, action) => {
            let parsedDate = dateParser(action.payload.date);

            if (state.data) {
                let index = state.data.findIndex(group => group.title == parsedDate);

                if (index != -1) {
                    let itemIndex = state.data[index].data.findIndex(item => item.id == action.payload.id);
                    state.data[index].data[itemIndex] = action.payload;
                }
                else {
                    state.data.push({ title: parsedDate, data: [ action.payload ]})
                }
            }
            else {
                state.data = [{ title: parsedDate, data: action.payload }]
            }
        }),
        builder.addCase(thunkDeleteDetailedExerciseListItem.fulfilled, (state, action) => {
            for(let i = 0; i < state.data.length; i++) {
                let index = state.data[i].data.findIndex(item => item.id == action.meta.arg.payload.id);
                if(index != -1) {
                    if (state.data[i].data.length == 1) {
                        state.data.splice(i, 1);
                    }
                    else {
                        state.data[i].data.splice(index, 1);
                    }
                    return
                }
            }
        })
    }
})

export default detailedExerciseListItemsSlice.reducer;