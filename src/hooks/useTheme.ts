import { Theme } from '@/constants/theme';
import { selectCurrentColorMode } from '@/redux/slices/theme';

import { useAppSelector } from './redux';

export function useTheme() {
  const colorMode = useAppSelector(selectCurrentColorMode);

  return Theme[colorMode];
}
