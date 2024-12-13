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
  language,
}: GetExerciseListItemsDTO): ApiResult<ExerciseListItem[]> {
  try {
    const { data } = await axiosClient.get<ExerciseListItem[]>(`/exercise-lists/${id}/items`, {
      params: { language },
    });
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function getExerciseListItemById({
  id,
  listId,
  language,
}: GetExerciseListItemByIdDTO): ApiResult<ExerciseListItem> {
  try {
    const { data } = await axiosClient.get<ExerciseListItem>(
      `/exercise-lists/${listId}/items/${id}`,
      { params: { language } }
    );
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function createExerciseListItem({
  listId,
  exerciseId,
  language,
}: CreateExerciseListItemDTO): ApiResult<ExerciseListItem> {
  try {
    const { data } = await axiosClient.post<ExerciseListItem>(
      `/exercise-lists/${listId}/items`,
      {
        exerciseId,
      },
      { params: { language } }
    );
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function deleteExerciseListItem({
  listId,
  listItemId,
}: DeleteExerciseListItemDTO): ApiResult {
  try {
    await axiosClient.delete(`/exercise-lists/${listId}/items/${listItemId}`);
    return handleResult();
  } catch (err) {
    return handleError(err);
  }
}
