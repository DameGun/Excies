import { ExerciseListItem } from '@/types/exerciseListItem';

export function isExerciseListItem(item: any): item is ExerciseListItem {
  return 'list_id' in item && 'exercise_id' in item && 'name' in item;
}
