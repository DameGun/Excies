import { handleError } from '@/helpers/errorHandler';
import { handleResult } from '@/helpers/resultHandler';
import type { ApiResult } from '@/types/api';
import type { ExercisesLocalized, GetExercisesDTO } from '@/types/exercise';

import { axiosClient } from '..';

export async function getExercises({ language }: GetExercisesDTO): ApiResult<ExercisesLocalized> {
  try {
    const { data } = await axiosClient.get<ExercisesLocalized>(`/exercisesTranslated/${language}`);
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}
