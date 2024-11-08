import { Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useStyles } from '@/hooks/useStyles';
import { IconNames } from '@/types/icons';
import { PressableProps } from '@/types/pressable';

import { getStyles } from './styles';

import { CustomButton } from '../Button';

type EmptyListProps = PressableProps & {
  primaryText: string;
  secondaryText: string;
  buttonText?: string;
  iconName: IconNames;
};

export function EmptyList({
  primaryText,
  secondaryText,
  buttonText,
  iconName,
  onPress,
}: EmptyListProps) {
  const styles = useStyles(getStyles);

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={iconName} style={styles.icon} />
      <Text style={styles.headerText}>{primaryText}</Text>
      <Text style={styles.commonText}>{secondaryText}</Text>
      {buttonText && <CustomButton onPress={onPress}>{buttonText}</CustomButton>}
    </View>
  );
}
