import { handleError } from '@/helpers/errorHandler';
import { handleResult } from '@/helpers/resultHandler';
import { ApiResult, RequiredUsernameParameter } from '@/types/api';
import {
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
    const { data } = await axiosClient.get(`/${username}/exercise-lists`);
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
    const { data } = await axiosClient.post(`/${username}/exercise-lists`, { name, description });
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
    const { data } = await axiosClient.patch(`/${username}/exercise-lists/${id}`, {
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
    const { data } = await axiosClient.delete(`/${username}/exercise-lists/${id}`);
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}
