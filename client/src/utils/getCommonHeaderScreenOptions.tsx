import { Logo } from '@/components';
import { ThemeColors } from '@/types/theme';

export const getCommonHeaderScreenOptions = (colors: ThemeColors) => {
  return {
    headerStyle: {
      backgroundColor: colors.background,
    },
    tabBarStyle: {
      backgroundColor: colors.background,
    },
    headerTitle: '',
    headerRight: () => <Logo />,
  };
};
