import { handleError } from '@/helpers/errorHandler';
import { handleResult } from '@/helpers/resultHandler';
import type { ApiResult } from '@/types/api';
import type {
  CreateExerciseListItemDTO,
  DeleteExerciseListItemDTO,
  ExerciseListItem,
  GetExerciseListItemByIdDTO,
  GetExerciseListItemsDTO,
} from '@/types/exerciseListItem';

import { axiosClient } from '..';

export async function getExerciseListItems({
  id,
  username,
  language
}: GetExerciseListItemsDTO): ApiResult<ExerciseListItem[]> {
  try {
    const { data } = await axiosClient.get<ExerciseListItem[]>(
      `/${username}/exercise-lists/${id}/items`,
      { params: { language } }
    );
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function getExerciseListItemById({
  id,
  username,
  list_id,
  language
}: GetExerciseListItemByIdDTO): ApiResult<ExerciseListItem> {
  try {
    const { data } = await axiosClient.get<ExerciseListItem>(
      `/${username}/exercise-lists/${list_id}/items/${id}`,
      { params: { language } }
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
  language
}: CreateExerciseListItemDTO): ApiResult<ExerciseListItem> {
  try {
    const { data } = await axiosClient.post<ExerciseListItem>(
      `/${username}/exercise-lists/${list_id}/items`,
      {
        exercise_id,
      },
      { params: { language } }
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
    console.log(err);
    return handleError(err);
  }
}
