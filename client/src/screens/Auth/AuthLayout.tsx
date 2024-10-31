import { PropsWithChildren } from 'react';
import { Image, View } from 'react-native';

import logoBlack from '@/assets/auth-logo-black.png';
import logoWhite from '@/assets/auth-logo-white.png';
import { useCustomTheme } from '@/hooks/useCustomTheme';

import { styles } from './styles';

export function AuthLayout({ children }: PropsWithChildren) {
  const { dark } = useCustomTheme();

  return (
    <View style={styles.container}>
      <Image source={dark ? logoWhite : logoBlack} style={styles.logo} />
      {children}
    </View>
  );
}
