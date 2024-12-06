import { Image } from 'react-native';

import iconImage from '@/assets/images/icon.png';
import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';

export function Logo() {
  const styles = useStyles(getStyles);

  return <Image source={iconImage} style={styles.logo} />;
}
