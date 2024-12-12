import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { thunkAppOpen, thunkLogin, thunkRegister } from '../auth/thunks';
import { UserSliceState } from '@/types/user';
import { RootState } from '@/types/redux';
import { thunkUpdateUserWeightPreference } from './thunks';

const initialState: UserSliceState = {
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
        state.isMetricSystemChoosed = action.payload.is_metric_system_choosed;
      }
    );
  },
});

export const selectIsUserChoosedMetricSystem = (state: RootState) =>
  state.user.isMetricSystemChoosed;

export default userSlice.reducer;
