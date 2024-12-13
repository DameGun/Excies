import { createSlice } from '@reduxjs/toolkit';

import { ColorMode } from '@/constants/theme';
import type { RootState } from '@/types/redux';
import type { ThemeState } from '@/types/theme';

const initialState: ThemeState = {
  mode: ColorMode.Dark,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.mode = state.mode === ColorMode.Dark ? ColorMode.Light : ColorMode.Dark;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const selectCurrentColorMode = (state: RootState) => state.theme.mode;

export default themeSlice.reducer;
