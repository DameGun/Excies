import type { PropsWithChildren } from 'react';
import { Image, View } from 'react-native';

import logoBlack from '@/assets/images/auth-logo-black.png';
import logoWhite from '@/assets/images/auth-logo-white.png';
import { useStyles } from '@/hooks/useStyles';
import { useTheme } from '@/hooks/useTheme';

import { getStyles } from './styles';

export function AuthLayout({ children }: PropsWithChildren) {
  const { dark } = useTheme();
  const styles = useStyles(getStyles);

  return (
    <View style={styles.container}>
      <Image source={dark ? logoWhite : logoBlack} style={styles.logo} />
      <View style={styles.innerContainer}>{children}</View>
    </View>
  );
}
