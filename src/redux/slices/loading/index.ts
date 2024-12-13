import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { LoadingState } from '@/constants/loading';
import type { LoadingSliceState } from '@/types/loadingSlice';
import type { RootState } from '@/types/redux';

const initialState: LoadingSliceState = {
  status: LoadingState.Idle,
  errorMessage: undefined,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<LoadingSliceState>) => {
      const { status, errorMessage, code } = action.payload;
      state.code = code;
      state.status = status;
      state.errorMessage = errorMessage;
    },
  },
});

export const { setStatus } = loadingSlice.actions;

export const selectStatusCode = (state: RootState) => state.loading.code;
export const selectStatus = (state: RootState) => state.loading.status;
export const selectErrorMessage = (state: RootState) => state.loading.errorMessage;

export default loadingSlice.reducer;
