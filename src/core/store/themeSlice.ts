import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { THEME_STORAGE_KEY } from '../../constants';

const changeTheme = (data: string) => {
  if (data === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');
  } else if (data === 'light') {
    document.documentElement.classList.remove('dark');
    localStorage.setItem(THEME_STORAGE_KEY, 'light');
  } else {
    throw Error('Received wrong theme name!');
  }
};

let initTheme: string;

if (
  localStorage.getItem(THEME_STORAGE_KEY) === 'light' ||
  !localStorage.getItem(THEME_STORAGE_KEY) ||
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  document.documentElement.classList.add('dark');
  initTheme = 'dark';
} else {
  document.documentElement.classList.remove('dark');
  initTheme = 'light';
}

interface IThemeState {
  theme: string;
}

const initialState: IThemeState = {
  theme: initTheme,
};

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      changeTheme(state.theme);
    },
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
      changeTheme(state.theme);
    },
  },
});

export const { setTheme, toggleTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;

