import { CreateStyleSheetFunc } from '@/types/styles';

export const createStylesheet = <T extends CreateStyleSheetFunc>(styleSheetFunc: T) =>
  styleSheetFunc;
