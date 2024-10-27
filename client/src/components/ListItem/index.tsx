import { PropsWithChildren } from 'react';
import { Pressable, Text, View } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useStyles } from '@/hooks/useStyles';
import { EntityWithIdAndName } from '@/types/common';
import { EntypoIconNames } from '@/types/icons';
import { PressableProps } from '@/types/pressable';

import { getStyles } from './styles.js';

type ListItemProps<T> = PressableProps &
  PropsWithChildren & {
    title: string;
    titleStyle: object;
    item?: T;
    iconName: EntypoIconNames;
    iconSize?: number;
    iconColor: string;
    infoRight?: string;
    isLast: boolean;
    index: number;
  };

export function ListItem<T extends EntityWithIdAndName>({
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
    onPress?.(item);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.greyBackground,
        },
        isLast && styles.itemLastStyle,
        index == 0 && styles.itemFirstStyle,
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
            {item?.name || title}
          </Text>

          <View style={styles.infoRightContainer}>
            {children}
            {infoRight && <Text style={styles.infoRightText}>{infoRight}</Text>}
            <Entypo name='chevron-right' size={18} color={colors.grey} />
          </View>
        </View>
      </View>
    </Pressable>
  );
}
