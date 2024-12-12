import { useMemo } from 'react';

import type { CreateStyleSheetFunc, MergeStylesType } from '@/types/styles';

import { useTheme } from './useTheme';

export function useStyles<T extends CreateStyleSheetFunc[]>(...styles: T) {
  const theme = useTheme();

  const globalStyles = useMemo(() => {
    const combinedStyles = styles.reduce(
      (acc, getStyles) => Object.assign(acc, getStyles(theme)),
      {}
    );

    return combinedStyles as MergeStylesType<T>;
  }, [theme]);

  return globalStyles;
}
