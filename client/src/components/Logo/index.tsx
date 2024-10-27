import { Image } from 'react-native';

export function Logo() {
  return (
    <Image
      source={require('../assets/icon.png')}
      style={{ height: 40, width: 40, marginRight: 20 }}
    />
  );
}
