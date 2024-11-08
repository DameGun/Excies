import { ReactElement, useCallback } from 'react';
import { FlatList, ListRenderItem, Text, View } from 'react-native';

import { useStyles } from '@/hooks/useStyles';
import { EntityWithIdAndName } from '@/types/common';
import { RenderItemProps } from '@/types/list';

import { getStyles } from './styles';

import { getCommonStyles } from '../styles';

type ListProps<T> = {
  title?: string;
  data: T[];
  renderItem(props: RenderItemProps<T>): ReactElement;
  headerComponent?: ReactElement;
  searchPhrase?: string;
};

export function CustomFlatList<T extends EntityWithIdAndName>({
  title,
  data,
  renderItem,
  headerComponent,
  searchPhrase = '',
}: ListProps<T>) {
  const styles = useStyles(getCommonStyles, getStyles);

  const renderItemWithSearch = useCallback<ListRenderItem<T>>(
    ({ item, index }) => {
      const isLast = index === data.length - 1;
      const isFirst = index === 0 && !headerComponent;

      if (searchPhrase) {
        const isInSearch = item.name
          .toUpperCase()
          .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''));

        if (!isInSearch) {
          return null;
        }
      }

      return renderItem({ item, isLast, isFirst });
    },
    [searchPhrase, headerComponent, renderItem, data]
  );

  return (
    <View style={styles.container}>
      {title && <Text style={styles.headerBold}>{title}</Text>}
      <FlatList
        ListHeaderComponent={headerComponent}
        contentContainerStyle={styles.listContainer}
        data={data}
        renderItem={renderItemWithSearch}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
