import { memo } from 'react';
import { Pressable, Text, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { useStyles } from '@/hooks/useStyles';
import { Exercise } from '@/types/exercise';
import { ExerciseListItem } from '@/types/exerciseListItem';
import { AntIconNames } from '@/types/icons';
import { PressableProps } from '@/types/pressable';

import { getStyles } from '../styles';

type LargeListItemProps = PressableProps<Exercise | ExerciseListItem> & {
  item: Exercise | ExerciseListItem;
  iconName: AntIconNames;
};

export const LargeListItem = memo(({ item, iconName, onPress }: LargeListItemProps) => {
  const styles = useStyles(getStyles);

  const handlePress = () => {
    onPress?.(item);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? styles.listItemPressed.backgroundColor : 'black',
        },
      ]}
      onPress={handlePress}
    >
      <View style={styles.itemContainer}>
        <AntDesign name={iconName} size={16} color={styles.iconColor.color} />
        <View style={styles.borderContainer}>
          <Text style={styles.listItem}>{item.name}</Text>
        </View>
      </View>
    </Pressable>
  );
});
