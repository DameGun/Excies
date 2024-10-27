type BaseColors = {
  grey: string;
  greyDark: string;
  greyBackground: string;
  greyPressed: string;
  primary: string;
  primaryPressed: string;
  whitePressed: string;
};

type ThemeColors = BaseColors & {
  background: string;
  text: string;
};

type CustomTheme = {
  dark: boolean;
  colors: ThemeColors;
};

export type { BaseColors, CustomTheme, ThemeColors };
