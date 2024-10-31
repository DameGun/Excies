import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

import { ThemeColors } from './theme';

type StyleSheetFunc<T> = (colors: ThemeColors) => T;

type StyleProps<T extends string> = {
  [K in T as `${K}Style`]?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
};

export type { StyleProps, StyleSheetFunc };
