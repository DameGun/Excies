import { useMemo } from 'react';

import type { CreateStyleSheetFunc, MergeStylesType } from '@/types/styles';

import { useCustomTheme } from './useCustomTheme';

export function useStyles<T extends CreateStyleSheetFunc[]>(...styles: T) {
  const theme = useCustomTheme();

  const globalStyles = useMemo(() => {
    const combinedStyles = styles.reduce(
      (acc, getStyles) => Object.assign(acc, getStyles(theme)),
      {}
    );

    return combinedStyles as MergeStylesType<T>;
  }, [theme]);

  return globalStyles;
}
