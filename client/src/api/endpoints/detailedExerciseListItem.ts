import { handleError } from '@/helpers/errorHandler';
import { handleResult } from '@/helpers/resultHandler';
import { ApiResult } from '@/types/api';
import {
  CreateDetailedExerciseListItemDTO,
  DeleteDetailedExerciseListItemDTO,
  DetailedExerciseListItem,
  GetDetailedExerciseListItemsDTO,
  UpdateDetailedExerciseListItemDTO,
} from '@/types/detailedExerciseListItem';
import { ExerciseListItem } from '@/types/exerciseListItem';

import { axiosClient } from '..';

export async function getDetailedExerciseListItems({
  username,
  list_id,
  list_item_id,
}: GetDetailedExerciseListItemsDTO): ApiResult<DetailedExerciseListItem[]> {
  try {
    const { data } = await axiosClient.get(
      `/${username}/exercise-lists/${list_id}/items/${list_item_id}/details`
    );
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function createDetailedExerciseListItem({
  username,
  list_id,
  list_item_id,
  detailed_exercise_list_item,
}: CreateDetailedExerciseListItemDTO): ApiResult<DetailedExerciseListItem> {
  try {
    const { data } = await axiosClient.post(
      `/${username}/exercise-lists/${list_id}/items/${list_item_id}/details`,
      detailed_exercise_list_item
    );
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function updateDetailedExerciseListItem({
  username,
  list_id,
  list_item_id,
  id,
  detailed_exercise_list_item,
}: UpdateDetailedExerciseListItemDTO): ApiResult<ExerciseListItem> {
  try {
    const { data } = await axiosClient.patch(
      `/${username}/exercise-lists/${list_id}/items/${list_item_id}/details/${id}`,
      detailed_exercise_list_item
    );
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function deleteDetailedExerciseListItem({
  username,
  list_id,
  list_item_id,
  id,
}: DeleteDetailedExerciseListItemDTO): ApiResult {
  try {
    const { data } = await axiosClient.delete(
      `/${username}/exercise-lists/${list_id}/items/${list_item_id}/details/${id}`
    );
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}
