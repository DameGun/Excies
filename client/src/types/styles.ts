import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

import { CustomTheme } from './theme';
import { UnionToIntersection } from './utility';

type StylesObjectTypes = StyleProp<ViewStyle | TextStyle | ImageStyle>;

type StyleProps<T extends string> = {
  [K in T as `${K}Style`]?: StylesObjectTypes;
};

type StyledFields<T extends StylesObjectTypes, S extends string> = {
  [K in S]: T;
};

type BaseStylesOptions = {
  sm: number;
  md: number;
  lg: number;
};

type StylesOptions<T extends string = ''> = [T] extends ['']
  ? BaseStylesOptions
  : BaseStylesOptions & {
      [K in T]: number;
    };

type StylesFieldFunc<T> = (...props: any[]) => T;

type StylesFieldCarryingFunc<T extends StylesObjectTypes> = StylesFieldFunc<StylesFieldFunc<T>>;

type StyleSheetRuleType<T extends StylesObjectTypes = StylesObjectTypes> =
  | T
  | StylesFieldFunc<T>
  | StylesFieldCarryingFunc<T>;

type StyleSheetObjectType = {
  [key: string]: StyleSheetRuleType;
};

type CreateStyleSheetFunc = (theme: CustomTheme) => StyleSheetObjectType;

type MergeStylesType<T extends CreateStyleSheetFunc[]> = UnionToIntersection<ReturnType<T[number]>>;

export type {
  CreateStyleSheetFunc,
  MergeStylesType,
  StyledFields,
  StyleProps,
  StylesObjectTypes,
  StylesOptions,
};
