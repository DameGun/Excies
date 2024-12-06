import type { ReactElement } from 'react';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { ListRenderItem } from 'react-native';
import { FlatList, Text, View } from 'react-native';

import { useStyles } from '@/hooks/useStyles';
import type { EntityWithIdAndName } from '@/types/common';
import type { RenderItemProps } from '@/types/list';

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
  const { t } = useTranslation();

  const filteredData = useMemo(
    () =>
      searchPhrase.length > 0
        ? data.filter(({ name }) =>
            name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
          )
        : data,
    [searchPhrase, data]
  );

  const renderItemWithSearch = useCallback<ListRenderItem<T>>(
    ({ item, index }) => {
      const isLast = index === filteredData.length - 1;
      const isFirst = index === 0 && !headerComponent;

      return renderItem({ item, isLast, isFirst });
    },
    [searchPhrase, headerComponent, renderItem, data]
  );

  return (
    <View style={styles.container}>
      {title && <Text style={styles.headerBold}>{title}</Text>}
      {searchPhrase.length > 0 && filteredData.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.mainEmptyText}>{t('search.mainText', { searchPhrase })}</Text>
          <Text style={styles.secondaryEmptyText}>{t('search.secondaryText')}</Text>
        </View>
      ) : (
        <FlatList
          ListHeaderComponent={headerComponent}
          contentContainerStyle={styles.listContainer}
          data={filteredData}
          renderItem={renderItemWithSearch}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}
