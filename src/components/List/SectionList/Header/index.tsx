import type { TextStyle } from 'react-native';
import { Text } from 'react-native';

import type { SectionListDataType } from '@/types/section';

type SectionHeaderProps<T> = {
  section: SectionListDataType<T>;
};

export function SectionHeader(styles?: TextStyle) {
  return function <T>({ section: { title } }: SectionHeaderProps<T>) {
    return <Text style={styles}>{title}</Text>;
  };
}
