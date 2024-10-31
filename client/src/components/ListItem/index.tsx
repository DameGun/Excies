import { PropsWithChildren } from 'react';
import { Pressable, Text, View } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useStyles } from '@/hooks/useStyles';
import { EntityWithId } from '@/types/common';
import { EntypoIconNames } from '@/types/icons';
import { PressableProps } from '@/types/pressable';
import { StyleProps } from '@/types/styles';

import { getStyles } from './styles';

type ListItemProps<T> = PressableProps<T> &
  PropsWithChildren &
  StyleProps<'title'> & {
    title: string;
    item?: T;
    iconName?: EntypoIconNames;
    iconSize?: number;
    iconColor?: string;
    infoRight?: number | string;
    isLast: boolean;
    index: number;
  };

export function ListItem<T extends EntityWithId>({
  title = 'Empty title',
  titleStyle,
  item,
  iconName,
  iconSize = 20,
  iconColor,
  infoRight,
  isLast,
  index,
  onPress,
  children,
}: ListItemProps<T>) {
  const { colors } = useCustomTheme();
  const styles = useStyles(getStyles);

  const handlePress = () => {
    if (item) onPress?.(item);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.greyBackground,
        },
        isLast && styles.itemLastStyle,
        index === 0 && styles.itemFirstStyle,
      ]}
      onPress={handlePress}
    >
      <View style={styles.container}>
        {iconName ? (
          <View style={styles.icon}>
            <Entypo name={iconName} size={iconSize} color={iconColor || colors.primary} />
          </View>
        ) : (
          <View style={styles.icon} />
        )}
        <View style={[styles.borderContainer, !isLast && styles.border]}>
          <Text
            style={[
              {
                color: !item ? colors.primary : colors.text,
              },
              styles.text,
              titleStyle,
            ]}
          >
            {title}
          </Text>

          <View style={styles.infoRightContainer}>
            {children}
            {infoRight !== undefined && <Text style={styles.infoRightText}>{infoRight}</Text>}
            <Entypo name='chevron-right' size={18} color={colors.grey} />
          </View>
        </View>
      </View>
    </Pressable>
  );
}
