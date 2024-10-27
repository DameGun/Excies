import { ThemeColors } from './theme';

type StyleSheetFunc<T> = (colors: ThemeColors) => T;

export type { StyleSheetFunc };
