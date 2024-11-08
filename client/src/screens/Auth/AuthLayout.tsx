import { PropsWithChildren } from 'react';
import { Image, View } from 'react-native';

import logoBlack from '@/assets/auth-logo-black.png';
import logoWhite from '@/assets/auth-logo-white.png';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';

export function AuthLayout({ children }: PropsWithChildren) {
  const { dark } = useCustomTheme();
  const styles = useStyles(getStyles);

  return (
    <View style={styles.container}>
      <Image source={dark ? logoWhite : logoBlack} style={styles.logo} />
      <View style={styles.innerContainer}>{children}</View>
    </View>
  );
}
