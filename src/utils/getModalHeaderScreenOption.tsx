import type { ButtonProps } from 'react-native';

import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { CustomHeaderButton } from '@/components/CustomHeaderButton';

type ModalHeaderScreenOptionsProps = Pick<ButtonProps, 'disabled' | 'onPress'> & {
  title: string;
  buttonText?: string;
  disableRightButton?: boolean;
};

export const getModalHeaderScreenOption = ({
  disabled,
  onPress,
  title,
  buttonText,
  disableRightButton = false,
}: ModalHeaderScreenOptionsProps): Partial<NativeStackNavigationOptions> => {
  return {
    headerRight: () =>
      !disableRightButton && (
        <CustomHeaderButton disabled={disabled} onPress={onPress}>
          {buttonText}
        </CustomHeaderButton>
      ),
    headerTitle: title,
  };
};
