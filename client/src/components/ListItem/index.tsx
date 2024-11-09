import { useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useStyles } from '@/hooks/useStyles';
import type { EntityWithId } from '@/types/common';
import type { ListItemProps } from '@/types/list';
import { IsListItemTextPropsWithExtract } from '@/utils/typePredicates';

import { getStyles } from './styles';

export function ListItem<T extends EntityWithId>({
  titleStyle,
  iconName,
  iconHidden,
  isLast,
  isFirst,
  children,
  ...props
}: ListItemProps<T>) {
  const styles = useStyles(getStyles);

  const listItemTitle = useMemo(() => {
    const titleText = IsListItemTextPropsWithExtract(props)
      ? props.extractTitle(props.item)
      : props.title;

    return (
      <Text style={styles.listItemTitle(IsListItemTextPropsWithExtract(props), titleStyle)}>
        {titleText}
      </Text>
    );
  }, [props]);

  const listItemInfo = useMemo(() => {
    const infoText = IsListItemTextPropsWithExtract(props)
      ? props.extractInfo?.(props.item)
      : props.info;

    if (infoText) {
      return <Text style={styles.infoRightText}>{infoText}</Text>;
    }

    return null;
  }, [props]);

  const handlePress = () => {
    if (IsListItemTextPropsWithExtract(props)) {
      const { onPress, item } = props;
      onPress?.(item);
    } else {
      const { onPress } = props;
      onPress?.();
    }
  };

  return (
    <Pressable style={styles.listItem(isLast, isFirst)} onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.leftIconContainer}>
          {iconName && (
            <MaterialCommunityIcons name={iconName} style={styles.leftIcon(iconHidden)} />
          )}
        </View>
        <View style={[styles.borderContainer, !isLast && styles.border]}>
          {listItemTitle}
          <View style={styles.infoRightContainer}>
            {children}
            {listItemInfo}
            <MaterialCommunityIcons name='chevron-right' style={styles.rightIcon} />
          </View>
        </View>
      </View>
    </Pressable>
  );
}
