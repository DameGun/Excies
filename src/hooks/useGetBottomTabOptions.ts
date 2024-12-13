import { getBottomTabOptions, getBottomTabStyles } from '@/utils/getBottomTabOptions';

import { useStyles } from './useStyles';

export function useGetBottomTabOptions() {
  const styles = useStyles(getBottomTabStyles);

  return getBottomTabOptions(styles);
}
