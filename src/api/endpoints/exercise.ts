import { handleError } from '@/helpers/errorHandler';
import { handleResult } from '@/helpers/resultHandler';
import type { ApiResult } from '@/types/api';
import type { Exercise, ExercisesLocalized } from '@/types/exercise';
import type { LanguageParameter } from '@/types/i18n';

import { axiosClient } from '..';

export async function getExercises({ language }: LanguageParameter): ApiResult<ExercisesLocalized> {
  try {
    const { data } = await axiosClient.get<Exercise[]>('/exercises', {
      params: { language },
    });
    return handleResult({ data, language });
  } catch (err) {
    return handleError(err);
  }
}
