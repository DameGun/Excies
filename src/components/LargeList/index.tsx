import type { ReactElement } from 'react';
import { useCallback } from 'react';
import { SectionList } from 'react-native';

import { INITIAL_NUM_TO_RENDER, MAX_TO_RENDER_PER_BATCH } from '@/constants/listOptimization';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useStyles } from '@/hooks/useStyles';
import type { Exercise } from '@/types/exercise';
import type { ExerciseListItem } from '@/types/exerciseListItem';
import type { PressableProps } from '@/types/pressable';
import type { SectionListDataType, SectionListType } from '@/types/section';

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
  const { constants } = useCustomTheme();

  const renderItem = useCallback<RenderItemFunc>(
    ({ item, section: { iconName } }) => (
      <LargeListItem item={item} iconName={iconName} onPress={onPress} />
    ),
    []
  );

  return (
    <SectionList
      style={styles.listsContainer}
      sections={sections}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      renderSectionHeader={SectionHeader(styles.header)}
      getItemLayout={(_, index) => ({
        length: constants.largeListItemHeight,
        offset: constants.largeListItemHeight * index,
        index,
      })}
      initialNumToRender={INITIAL_NUM_TO_RENDER}
      maxToRenderPerBatch={MAX_TO_RENDER_PER_BATCH}
      removeClippedSubviews={true}
      stickySectionHeadersEnabled={true}
    />
  );
}
