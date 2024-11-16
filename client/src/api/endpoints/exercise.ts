import { handleError } from '@/helpers/errorHandler';
import { handleResult } from '@/helpers/resultHandler';
import type { ApiResult } from '@/types/api';
import type { ExercisesLocalized } from '@/types/exercise';

import { axiosClient } from '..';
import { LanguageParameter } from '@/types/i18n';

export async function getExercises({ language }: LanguageParameter): ApiResult<ExercisesLocalized> {
  try {
    const { data } = await axiosClient.get<ExercisesLocalized>('/exercisesTranslated', { params: { language } });
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}
