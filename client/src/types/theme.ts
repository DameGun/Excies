import type { StylesOptions } from './styles';

type BaseColors = {
  greyPressed: string;
  primary: string;
  primaryPressed: string;
  whitePressed: string;
};

type ThemeColors = BaseColors & {
  background: string;
  text: string;
  grey: string;
  greyDark: string;
  greyBackground: string;
};

type ThemeConstants = {
  borderRadius: StylesOptions<'xl'>;
  opacity: StylesOptions;
  fontSize: StylesOptions<'xl' | 'xl2' | 'xl3'>;
  gap: StylesOptions<'xl'>;
  borderWidth: StylesOptions;
  padding: StylesOptions<'xs' | 'xs2' | 'xl'>;
  margin: StylesOptions<'xs'>;
  headerLogoSize: number;
  largeListItemHeight: number;
};

type CustomTheme = {
  dark: boolean;
  colors: ThemeColors;
  constants: ThemeConstants;
};

export type { BaseColors, CustomTheme, ThemeColors, ThemeConstants };
