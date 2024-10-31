import { ReactElement, useCallback } from 'react';
import { SafeAreaView, SectionList, View } from 'react-native';

import { useStyles } from '@/hooks/useStyles';
import { Exercise } from '@/types/exercise';
import { ExerciseListItem } from '@/types/exerciseListItem';
import { PressableProps } from '@/types/pressable';
import { SectionListDataType, SectionListType } from '@/types/section';

import { LargeListItem } from './LargeListItem';
import { getStyles } from './styles';

import { SectionHeader } from '../List/SectionList/Header';

type LargeListProps = PressableProps<Exercise | ExerciseListItem> & {
  sections: SectionListType<Exercise | ExerciseListItem>;
};

type RenderItemProps = {
  item: Exercise | ExerciseListItem;
  section: SectionListDataType<Exercise | ExerciseListItem>;
};

type RenderItemFunc = (props: RenderItemProps) => ReactElement;

export function LargeList({ sections, onPress }: LargeListProps) {
  const styles = useStyles(getStyles);

  const renderItem = useCallback<RenderItemFunc>(
    ({ item, section: { iconName } }) => (
      <LargeListItem item={item} iconName={iconName} onPress={onPress} />
    ),
    [onPress]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listsContainer}>
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          renderSectionHeader={SectionHeader(styles.header)}
          ListFooterComponent={<View style={{ paddingVertical: 70 }}></View>}
          getItemLayout={(data, index) => ({ length: 50, offset: 50 * index, index })}
          initialNumToRender={20}
          maxToRenderPerBatch={20}
          windowSize={10}
          removeClippedSubviews={true}
          stickySectionHeadersEnabled={true}
        />
      </View>
    </SafeAreaView>
  );
}
