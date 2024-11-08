import { useTheme } from '@react-navigation/native';

import type { CustomTheme } from '@/types/theme';

export function useCustomTheme() {
  return useTheme() as unknown as CustomTheme;
}
