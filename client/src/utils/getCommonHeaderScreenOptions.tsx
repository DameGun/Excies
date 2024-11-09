import type { StackNavigationOptions } from '@react-navigation/stack';

import { Logo } from '@/components';
import { createStylesheet } from '@/helpers/createStylesheet';

export const getCommonHeaderScreenStyles = createStylesheet(({ colors }) => ({
  headerStyle: {
    backgroundColor: colors.background,
  },
  tabBarStyle: {
    backgroundColor: colors.background,
  },
}));

export const getCommonHeaderScreenOptions = (
  styles: ReturnType<typeof getCommonHeaderScreenStyles>
): StackNavigationOptions => ({
  ...styles,
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerRight: () => <Logo />,
});
