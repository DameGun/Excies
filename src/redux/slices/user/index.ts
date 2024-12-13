import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import type { RootState } from '@/types/redux';
import type { UserSliceState } from '@/types/user';

import { thunkUpdateUserWeightPreference } from './thunks';

import { thunkAppOpen, thunkLogin, thunkRegister } from '../auth/thunks';

const initialState: UserSliceState = {
  userId: '',
  isMetricSystemChoosed: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(
        thunkAppOpen.fulfilled,
        thunkLogin.fulfilled,
        thunkRegister.fulfilled,
        thunkUpdateUserWeightPreference.fulfilled
      ),
      (state, action) => {
        const payload = action.payload;

        if ('id' in payload) {
          state.userId = payload.id;
        } else {
          state.userId = payload.userId;
        }

        state.isMetricSystemChoosed = payload.isMetricSystemChoosed;
      }
    );
  },
});

export const selectIsUserChoosedMetricSystem = (state: RootState) =>
  state.user.isMetricSystemChoosed;

export default userSlice.reducer;
