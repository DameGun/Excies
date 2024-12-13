import { handleError } from '@/helpers/errorHandler';
import { handleResult } from '@/helpers/resultHandler';
import type { ApiResult } from '@/types/api';
import type { UpdateUserWeightPreferenceDTO, User } from '@/types/user';

import { axiosClient } from '..';

export async function updateUserWeightPreference({
  userId,
  isMetricSystemChoosed,
}: UpdateUserWeightPreferenceDTO): ApiResult<User> {
  try {
    const { data } = await axiosClient.patch<User>(`/user/${userId}`, {
      isMetricSystemChoosed,
    });
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}
