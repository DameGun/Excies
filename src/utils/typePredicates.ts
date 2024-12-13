import type { ExerciseListItem } from '@/types/exerciseListItem';
import type { ListItemTextPropsLiterals, ListItemTextPropsWithExtract } from '@/types/list';

export function isExerciseListItem(item: any): item is ExerciseListItem {
  return 'customName' in item && 'lastTimeUpdated' in item;
}

export function IsListItemTextPropsWithExtract<T>(
  props: ListItemTextPropsWithExtract<T> | ListItemTextPropsLiterals
): props is ListItemTextPropsWithExtract<T> {
  return 'item' in props;
}
