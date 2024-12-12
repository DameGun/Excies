import { useAppSelector } from './redux';
import { selectCurrentColorMode } from '@/redux/slices/theme';
import { Theme } from '@/constants/theme';

export function useTheme() {
  const colorMode = useAppSelector(selectCurrentColorMode);

  return Theme[colorMode];
}
