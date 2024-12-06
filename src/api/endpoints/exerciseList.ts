import { handleError } from '@/helpers/errorHandler';
import { handleResult } from '@/helpers/resultHandler';
import type { ApiResult, RequiredUsernameParameter } from '@/types/api';
import type {
  CreateExerciseListDTO,
  DeleteExerciseListDTO,
  ExerciseList,
  UpdateExerciseListDTO,
} from '@/types/exerciseList';

import { axiosClient } from '..';

export async function getExerciseLists({
  username,
}: RequiredUsernameParameter): ApiResult<ExerciseList[]> {
  try {
    const { data } = await axiosClient.get<ExerciseList[]>(`/${username}/exercise-lists`);
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function createExerciseList({
  username,
  name,
  description,
}: CreateExerciseListDTO): ApiResult<ExerciseList> {
  try {
    const { data } = await axiosClient.post<ExerciseList>(`/${username}/exercise-lists`, {
      name,
      description,
    });
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function updateExerciseList({
  username,
  id,
  name,
  description,
}: UpdateExerciseListDTO): ApiResult<ExerciseList> {
  try {
    const { data } = await axiosClient.patch<ExerciseList>(`/${username}/exercise-lists/${id}`, {
      name,
      description,
    });
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function deleteExerciseList({ username, id }: DeleteExerciseListDTO): ApiResult {
  try {
    await axiosClient.delete(`/${username}/exercise-lists/${id}`);
    return handleResult();
  } catch (err) {
    return handleError(err);
  }
}
