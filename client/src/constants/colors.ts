import { BaseColors, CustomTheme } from '@/types/theme';

export const BASE_COLORS: BaseColors = {
  grey: '#aeaeb2',
  greyDark: '#171717',
  greyBackground: '#434344',
  greyPressed: '#646466',
  primary: '#E77917',
  primaryPressed: '#AF5B11',
  whitePressed: '#A6A6A6',
};

export const LIGHT_THEME: CustomTheme = {
  dark: false,
  colors: {
    background: 'white',
    text: 'black',
    ...BASE_COLORS,
  },
};

export const DARK_THEME: CustomTheme = {
  dark: true,
  colors: {
    background: 'black',
    text: 'white',
    ...BASE_COLORS,
  },
};
