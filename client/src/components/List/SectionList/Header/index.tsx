import { Text } from 'react-native';

import { SectionListDataType } from '@/types/section';

type SectionHeaderProps<T> = {
  section: SectionListDataType<T>;
};

export function SectionHeader(styles?: object) {
  return function <T>({ section: { title } }: SectionHeaderProps<T>) {
    return <Text style={styles}>{title}</Text>;
  };
}
