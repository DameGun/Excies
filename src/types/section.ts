import type { SectionListData } from 'react-native';

import type { IconNames } from './icons';

type SectionType = { iconName?: IconNames; title: string };

type SectionListDataType<T> = SectionListData<T, SectionType>;

type SectionListType<T = any> = readonly SectionListDataType<T>[];

export type { SectionListDataType, SectionListType, SectionType };
