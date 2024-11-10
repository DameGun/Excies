import type { ReactElement } from 'react';
import { useCallback } from 'react';
import type { SectionListRenderItem } from 'react-native';
import { SectionList, View } from 'react-native';

import { useStyles } from '@/hooks/useStyles';
import type { EntityWithId } from '@/types/common';
import type { RenderItemProps } from '@/types/list';
import type { SectionListType } from '@/types/section';

import { SectionHeader } from './Header';
import { getStyles } from './styles';

import { getCommonStyles } from '../styles';

type CustomSectionListProps<T> = {
  sections: SectionListType<T>;
  renderItem(props: RenderItemProps<T>): ReactElement;
};

export function CustomSectionList<T extends EntityWithId>({
  sections,
  renderItem,
}: CustomSectionListProps<T>) {
  const styles = useStyles(getCommonStyles, getStyles);

  const renderItemWithProps = useCallback<SectionListRenderItem<T>>(
    ({ index, item, section: { data } }) => {
      const isLast = index === data.length - 1;
      const isFirst = index === 0;

      return renderItem({ isFirst, isLast, item });
    },
    [renderItem]
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderSectionHeader={SectionHeader(styles.headerRegular)}
        renderSectionFooter={() => <View style={styles.separator} />}
        renderItem={renderItemWithProps}
      />
    </View>
  );
}
