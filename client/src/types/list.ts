import { PropsWithChildren, ReactNode } from 'react';
import { TextStyle } from 'react-native';

import { IconNames } from './icons';
import { PressableProps } from './pressable';
import { StyledFields } from './styles';

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
