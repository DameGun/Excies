import { Button, ButtonProps } from 'react-native';

import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const getModalHeaderScreenOption = ({
  disabled,
  onPress,
  title,
  color,
}: ButtonProps): Partial<NativeStackNavigationOptions> => {
  return {
    headerRight: () => <Button disabled={disabled} title='Done' color={color} onPress={onPress} />,
    headerTitle: title,
    headerTitleAlign: 'center',
  };
};
