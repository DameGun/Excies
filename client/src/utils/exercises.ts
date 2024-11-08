import type { Exercise } from '@/types/exercise';
import type { ExerciseListItem } from '@/types/exerciseListItem';

const formatSearchPhrase = (searchPhrase: string) =>
  searchPhrase.toUpperCase().trim().replace(/\s/g, '');

export function getExercisesWithSearch(
  items: ExerciseListItem[] | Exercise[],
  searchPhrase: string
) {
  if (!searchPhrase) return items;

  return items.filter((item) => item.name.toUpperCase().includes(formatSearchPhrase(searchPhrase)));
}
