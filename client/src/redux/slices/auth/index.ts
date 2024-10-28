import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthSliceState, OnAuthPayload } from '@/types/authSlice';

const initialState: AuthSliceState = {
  isLoggedIn: false,
  username: null,
  user_id: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onAuth: (state, action: PayloadAction<OnAuthPayload>) => {
      state.username = action.payload.username;
      state.user_id = action.payload.user_id;
      state.isLoggedIn = true;
    },
    onLogout: (state) => {
      state.username = null;
      state.user_id = null;
      state.isLoggedIn = false;
    },
  },
});

export const { onAuth, onLogout } = authSlice.actions;

export default authSlice.reducer;
