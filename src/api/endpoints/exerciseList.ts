import { handleError } from '@/helpers/errorHandler';
import { handleResult } from '@/helpers/resultHandler';
import type { ApiResult } from '@/types/api';
import type {
  CreateExerciseListDTO,
  DeleteExerciseListDTO,
  ExerciseList,
  UpdateExerciseListDTO,
} from '@/types/exerciseList';

import { axiosClient } from '..';

export async function getExerciseLists(): ApiResult<ExerciseList[]> {
  try {
    const { data } = await axiosClient.get<ExerciseList[]>(`/exercise-lists`);
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function createExerciseList({
  name,
  description,
}: CreateExerciseListDTO): ApiResult<ExerciseList> {
  try {
    const { data } = await axiosClient.post<ExerciseList>(`/exercise-lists`, {
      name,
      description,
    });
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function updateExerciseList({
  id,
  name,
  description,
}: UpdateExerciseListDTO): ApiResult<ExerciseList> {
  try {
    const { data } = await axiosClient.patch<ExerciseList>(`/exercise-lists/${id}`, {
      name,
      description,
    });
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function deleteExerciseList({ id }: DeleteExerciseListDTO): ApiResult {
  try {
    await axiosClient.delete(`/exercise-lists/${id}`);
    return handleResult();
  } catch (err) {
    return handleError(err);
  }
}
