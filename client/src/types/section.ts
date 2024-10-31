import { SectionListData } from 'react-native';

import { AntIconNames } from './icons';

type SectionType = { iconName: AntIconNames; title: string };

type SectionListDataType<T> = SectionListData<T, SectionType>;

type SectionListType<T = any> = readonly SectionListDataType<T>[];

export type { SectionListDataType, SectionListType, SectionType };
