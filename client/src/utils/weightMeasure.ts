import {
  KG_TO_LBS_COEFFICIENT,
  WeightMeasurementSystemType,
} from '@/constants/detailedExerciseListItem';

export const convertLbsToKg = (value: number) => Number((value / KG_TO_LBS_COEFFICIENT).toFixed(0));

export const convertKgToLbs = (value: number) => Number((value * KG_TO_LBS_COEFFICIENT).toFixed(0));

export const weightMeasurementSystem = (isMetricSystemChoosed: boolean) =>
  isMetricSystemChoosed ? WeightMeasurementSystemType.Kg : WeightMeasurementSystemType.Lbs;

export const weightValueFormat = (weight: number, isMetricSystemChoosed: boolean) =>
  isMetricSystemChoosed ? weight : convertKgToLbs(weight);
