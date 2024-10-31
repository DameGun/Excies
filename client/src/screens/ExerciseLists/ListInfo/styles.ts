import { StyleSheet } from 'react-native';

import { ThemeColors } from '@/types/theme';
import { getInfoModalScreenStylesDefault } from '@/utils/getInfoModalScreenStylesDefault';

export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    ...getInfoModalScreenStylesDefault(colors),
  });
