import { useMemo } from 'react';

import { useTheme } from '@react-navigation/native';

export function useHeaderScreenOptions(getHeaderOptions) {
  const { colors } = useTheme();

  const screenOptions = useMemo(() => getHeaderOptions({ colors }), [colors]);

  return screenOptions;
}
