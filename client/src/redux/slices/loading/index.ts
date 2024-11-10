import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { LoadingState } from '@/constants/loading';
import type { LoadingSliceState, SetStatusPayload } from '@/types/loadingSlice';
import type { RootState } from '@/types/redux';

const initialState: LoadingSliceState = {
  status: LoadingState.Idle,
  errorMessage: undefined,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<SetStatusPayload>) => {
      const { status, errorMessage } = action.payload;
      state.status = status;
      state.errorMessage = errorMessage;
    },
  },
});

export const { setStatus } = loadingSlice.actions;

export const selectStatus = (state: RootState) => state.loading.status;
export const selectErrorMessage = (state: RootState) => state.loading.errorMessage;

export default loadingSlice.reducer;
