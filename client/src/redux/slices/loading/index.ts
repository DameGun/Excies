import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoadingState } from '@/constants/loading';
import { LoadingSliceState, SetStatusPayload } from '@/types/loadingSlice';
import { RootState } from '@/types/redux';

const initialState: LoadingSliceState = {
  status: LoadingState.Idle,
  errorMessage: undefined,
  showLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<SetStatusPayload>) => {
      const { status, errorMessage } = action.payload;
      state.status = status;
      state.errorMessage = errorMessage;

      if (status === LoadingState.Failed || status === LoadingState.Idle) {
        state.showLoading = false;
      }
    },
    setShowLoading: (state, action: PayloadAction<boolean>) => {
      state.showLoading = action.payload;
    },
  },
});

export const { setStatus, setShowLoading } = loadingSlice.actions;

export const selectStatus = (state: RootState) => state.loading.status;
export const selectShowLoading = (state: RootState) => state.loading.showLoading;
export const selectErrorMessage = (state: RootState) => state.loading.errorMessage;

export default loadingSlice.reducer;
