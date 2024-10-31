import { Image } from 'react-native';

import iconImage from '@/assets/icon.png';

export function Logo() {
  return <Image source={iconImage} style={{ height: 40, width: 40, marginRight: 20 }} />;
}
