import { ExerciseListItem } from '@/types/exerciseListItem';
import { ListItemTextPropsLiterals, ListItemTextPropsWithExtract } from '@/types/list';

export function isExerciseListItem(item: any): item is ExerciseListItem {
  return 'list_id' in item && 'exercise_id' in item && 'name' in item;
}

export function IsListItemTextPropsWithExtract<T>(
  props: ListItemTextPropsWithExtract<T> | ListItemTextPropsLiterals
): props is ListItemTextPropsWithExtract<T> {
  return 'item' in props;
}
