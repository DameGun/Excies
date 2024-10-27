import { useCallback } from 'react';
import { SectionList, SectionListRenderItem, View } from 'react-native';

import { useStyles } from '@/hooks/useStyles';
import { EntityWithId } from '@/types/common';
import { SectionListType } from '@/types/section';

import { SectionHeader } from './Header';

import { getStyles } from '../styles';

type CustomSectionList<T> = {
  sections: SectionListType<T>;
  renderItem: SectionListRenderItem<T>;
};

export function CustomSectionList<T extends EntityWithId>({
  sections,
  renderItem,
}: CustomSectionList<T>) {
  const styles = useStyles(getStyles);

  const sectionSeparator = useCallback(() => <View style={styles.separator} />, []);

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderSectionFooter={sectionSeparator}
        renderSectionHeader={SectionHeader(styles.headerRegular)}
        renderItem={renderItem}
        ListFooterComponent={<View style={{ paddingVertical: 20 }}></View>}
      />
    </View>
  );
}
