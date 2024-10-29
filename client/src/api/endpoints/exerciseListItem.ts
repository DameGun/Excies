import { handleError } from '@/helpers/errorHandler';
import { handleResult } from '@/helpers/resultHandler';
import { ApiResult } from '@/types/api';
import {
  CreateExerciseListItemDTO,
  DeleteExerciseListItemDTO,
  ExerciseListItem,
  GetExerciseListItemsDTO,
} from '@/types/exerciseListItem';

import { axiosClient } from '..';

export async function getExerciseListItems({
  id,
  username,
}: GetExerciseListItemsDTO): ApiResult<ExerciseListItem[]> {
  try {
    const { data } = await axiosClient.get<ExerciseListItem[]>(
      `/${username}/exercise-lists/${id}/items`
    );
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function createExerciseListItem({
  list_id,
  username,
  exercise_id,
}: CreateExerciseListItemDTO): ApiResult<ExerciseListItem> {
  try {
    const { data } = await axiosClient.post<ExerciseListItem>(
      `/${username}/exercise-lists/${list_id}/items`,
      {
        exercise_id,
      }
    );
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function deleteExerciseListItem({
  list_id,
  username,
  list_item_id,
}: DeleteExerciseListItemDTO): ApiResult {
  try {
    await axiosClient.delete(`/${username}/exercise-lists/${list_id}/items/${list_item_id}`);
    return handleResult();
  } catch (err) {
    return handleError(err);
  }
}
