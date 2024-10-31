import { ReactNode } from 'react';
import { Text, View } from 'react-native';

import { useStyles } from '@/hooks/useStyles';
import { PressableProps } from '@/types/pressable';

import { getStyles } from './styles';

import { CustomButton } from '../Button';

type EmptyListProps = PressableProps & {
  primaryText: string;
  secondaryText: string;
  buttonText?: string;
  IconComponent: ReactNode;
};

export function EmptyList({
  primaryText,
  secondaryText,
  buttonText,
  IconComponent,
  onPress,
}: EmptyListProps) {
  const styles = useStyles(getStyles);

  return (
    <View style={styles.container}>
      {IconComponent}
      <Text style={styles.headerText}>{primaryText}</Text>
      <Text style={styles.commonText}>{secondaryText}</Text>
      {buttonText && (
        <CustomButton buttonStyle={styles.button} onPress={onPress}>
          {buttonText}
        </CustomButton>
      )}
    </View>
  );
}
