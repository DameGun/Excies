import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/types/redux';
import type { ThemeState } from '@/types/theme';

const initialState: ThemeState = {
  mode: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const selectCurrentColorMode = (state: RootState) => state.theme.mode;

export default themeSlice.reducer;
