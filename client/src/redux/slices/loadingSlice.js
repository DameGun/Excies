import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        status: 'idle',
        error: null,
        showLoading: false
    },
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload.status;
            state.error = action.payload.error || 'Some error occured';
            
            if (action.payload.status == 'failed' || action.payload.status == 'idle') {
                state.showLoading = false;
            }
        },
        setShowLoading: (state, action) => {
            state.showLoading = action.payload;
        }
    }
})

export const { setStatus, setShowLoading } = loadingSlice.actions;

export default loadingSlice.reducer;