import type { PropsWithChildren, ReactNode } from 'react';
import type { TextStyle } from 'react-native';

import type { IconNames } from './icons';
import type { PressableProps } from './pressable';
import type { StyledFields } from './styles';

type RenderItemParameters = {
  isLast: boolean;
  isFirst: boolean;
};

type RenderItemProps<T> = {
  item: T;
} & RenderItemParameters;

type ListItemsIconProps = {
  iconName: IconNames;
};

type ListItemBaseProps = PropsWithChildren &
  Partial<StyledFields<TextStyle, 'titleStyle'>> &
  RenderItemParameters &
  Partial<ListItemsIconProps>;

type ListItemTextPropsWithExtract<T> = PressableProps<T> & {
  item: T;
  extractTitle(item: T): ReactNode;
  extractInfo?(item: T): ReactNode;
};

type ListItemTextPropsLiterals = PressableProps & {
  title: string | number;
  info?: string | number;
};

type ListItemTextProps<T> = ListItemTextPropsWithExtract<T> | ListItemTextPropsLiterals;

type ListItemProps<T> = ListItemBaseProps & ListItemTextProps<T>;

export type {
  ListItemProps,
  ListItemTextPropsLiterals,
  ListItemTextPropsWithExtract,
  RenderItemParameters,
  RenderItemProps,
};
