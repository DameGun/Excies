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
  listId,
  listItemId,
}: GetDetailedExerciseListItemsDTO): ApiResult<DetailedExerciseListItemsGroup[]> {
  try {
    const { data } = await axiosClient.get<DetailedExerciseListItemsGroup[]>(
      `/exercise-lists/${listId}/items/${listItemId}/detailed`
    );
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function createDetailedExerciseListItem({
  listId,
  listItemId,
  detailedExerciseListItem,
}: CreateDetailedExerciseListItemDTO): ApiResult<DetailedExerciseListItem> {
  try {
    const { data } = await axiosClient.post<DetailedExerciseListItem>(
      `/exercise-lists/${listId}/items/${listItemId}/detailed`,
      detailedExerciseListItem
    );
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function updateDetailedExerciseListItem({
  listId,
  listItemId,
  id,
  detailedExerciseListItem,
}: UpdateDetailedExerciseListItemDTO): ApiResult<DetailedExerciseListItem> {
  try {
    const { data } = await axiosClient.patch<DetailedExerciseListItem>(
      `/exercise-lists/${listId}/items/${listItemId}/detailed/${id}`,
      detailedExerciseListItem
    );
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function deleteDetailedExerciseListItem({
  listId,
  listItemId,
  id,
}: DeleteDetailedExerciseListItemDTO): ApiResult {
  try {
    await axiosClient.delete(`/exercise-lists/${listId}/items/${listItemId}/detailed/${id}`);
    return handleResult();
  } catch (err) {
    return handleError(err);
  }
}
