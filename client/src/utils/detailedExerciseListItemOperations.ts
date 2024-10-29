import { ItemValueOperationType } from '@/constants/detailedExerciseListItem';
import { DetailedOperationType } from '@/types/detailedExerciseListItem';

export const handleRepCount = (value: number, prevValue: number) =>
  value.toString().length <= 3 ? value : prevValue;

export const handleWeight = (value: number, prevValue: number) =>
  value.toString().length <= 4 ? value : prevValue;

export function handleInputButtonForRepetitions(
  { type, number }: DetailedOperationType,
  rep: number
) {
  if (type === ItemValueOperationType.Increase) {
    return handleRepCount(rep + number, rep);
  }

  return rep && rep - number >= 0 ? handleRepCount(rep - number, rep) : rep;
}

export function handleInputButtonForWeight(
  { type, number }: DetailedOperationType,
  weight: number
) {
  if (type === ItemValueOperationType.Increase) {
    return handleWeight(weight + number, weight);
  }

  return weight && weight - number >= 0 ? handleWeight(weight - number, weight) : weight;
}

export function handleRemoveRepetitions(rep: number) {
  const buff = rep.toString();
  return handleRepCount(Number(buff.slice(0, buff.length - 1)), rep);
}

export function handleRemoveWeight(weight: number) {
  const buff = weight.toString();
  return handleWeight(Number(buff.slice(0, buff.length - 1)), weight);
}

export function handleRepetitonsNumberPress(number: number, rep: number) {
  return handleRepCount(Number(rep.toString() + number), rep);
}

export function handleWeightNumberPress(number: number, weight: number) {
  return handleWeight(Number(weight.toString() + number), weight);
}
