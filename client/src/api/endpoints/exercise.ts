import { handleError } from '@/helpers/errorHandler';
import { handleResult } from '@/helpers/resultHandler';
import { ApiResult } from '@/types/api';
import { Exercise } from '@/types/exercise';

import { axiosClient } from '..';

export async function getExercises(): ApiResult<Exercise[]> {
  try {
    const { data } = await axiosClient.get<Exercise[]>('/exercises');
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}
