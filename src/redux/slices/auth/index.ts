import { createSlice, isAnyOf, isRejected } from '@reduxjs/toolkit';

import type { AuthSliceState } from '@/types/auth';
import type { RootState } from '@/types/redux';

import { thunkAppOpen, thunkLogin, thunkLogout, thunkRegister } from './thunks';

const initialState: AuthSliceState = {
  isLoggedIn: false,
  userId: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(isAnyOf(isRejected, thunkLogout.fulfilled), (state, action) => {
      if (action.payload === '401' || action.meta.requestStatus === 'fulfilled') {
        state.isLoggedIn = false;
        state.userId = null;
      }
    });
    builder.addMatcher(
      isAnyOf(thunkAppOpen.fulfilled, thunkLogin.fulfilled, thunkRegister.fulfilled),
      (state, action) => {
        state.userId = action.payload.userId;
        state.isLoggedIn = true;
      }
    );
  },
});

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export default authSlice.reducer;
