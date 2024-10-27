import { useMemo } from 'react';

import { StyleSheetFunc } from '@/types/styles';

import { useCustomTheme } from './useCustomTheme';

export function useStyles<T>(getStyles: StyleSheetFunc<T>) {
  const { colors, dark } = useCustomTheme();

  const globalStyles = useMemo(() => getStyles(colors), [dark, colors]);

  return globalStyles;
}
