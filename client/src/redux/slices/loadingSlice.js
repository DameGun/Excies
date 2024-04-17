import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        status: 'idle',
        error: null,
    },
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload.status;
            state.error = action.payload.error || 'Some error occured';
        }
    }
})

export const { setStatus } = loadingSlice.actions;

export default loadingSlice.reducer;