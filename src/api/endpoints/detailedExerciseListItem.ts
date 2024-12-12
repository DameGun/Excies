import { handleError } from '@/helpers/errorHandler';
import { handleResult } from '@/helpers/resultHandler';
import type { ApiResult } from '@/types/api';
import type {
  CreateDetailedExerciseListItemDTO,
  DeleteDetailedExerciseListItemDTO,
  DetailedExerciseListItem,
  DetailedExerciseListItemsGroup,
  GetDetailedExerciseListItemsDTO,
  UpdateDetailedExerciseListItemDTO,
} from '@/types/detailedExerciseListItem';

import { axiosClient } from '..';

export async function getDetailedExerciseListItems({
  username,
  list_id,
  list_item_id,
}: GetDetailedExerciseListItemsDTO): ApiResult<DetailedExerciseListItemsGroup[]> {
  try {
    const { data } = await axiosClient.get<DetailedExerciseListItemsGroup[]>(
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
    const { data } = await axiosClient.post<DetailedExerciseListItem>(
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
}: UpdateDetailedExerciseListItemDTO): ApiResult<DetailedExerciseListItem> {
  try {
    const { data } = await axiosClient.patch<DetailedExerciseListItem>(
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
    await axiosClient.delete(
      `/${username}/exercise-lists/${list_id}/items/${list_item_id}/details/${id}`
    );
    return handleResult();
  } catch (err) {
    return handleError(err);
  }
}
