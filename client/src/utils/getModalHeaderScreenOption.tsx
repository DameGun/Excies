import { Button, ButtonProps } from 'react-native';

export const getModalHeaderScreenOption = ({ disabled, onPress, title }: ButtonProps) => {
  return {
    headerRight: () => (
      <Button
        disabled={disabled}
        title='Done'
        //   color={buttonColor}
        onPress={onPress}
      />
    ),
    headerTitle: title,
    headerTitleAlign: 'center',
  };
};
