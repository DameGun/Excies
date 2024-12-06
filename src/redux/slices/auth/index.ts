import { createSlice, isAnyOf, isRejected } from '@reduxjs/toolkit';

import type { AuthSliceState } from '@/types/auth';
import type { RootState } from '@/types/redux';

import { thunkAppOpen, thunkLogin, thunkLogout, thunkRegister } from './thunks';

const initialState: AuthSliceState = {
  isLoggedIn: false,
  username: null,
  user_id: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(isAnyOf(isRejected, thunkLogout.fulfilled), (state, action) => {
      if (action.payload === '401' || action.meta.requestStatus === 'fulfilled') {
        state.isLoggedIn = false;
        state.user_id = null;
        state.username = null;
      }
    });
    builder.addMatcher(
      isAnyOf(thunkAppOpen.fulfilled, thunkLogin.fulfilled, thunkRegister.fulfilled),
      (state, action) => {
        state.username = action.payload.username;
        state.user_id = action.payload.user_id;
        state.isLoggedIn = true;
      }
    );
  },
});

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectUsername = (state: RootState) => state.auth.username;

export default authSlice.reducer;
