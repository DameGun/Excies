import { ApiResult } from '@/types/api';
import { User, UpdateUserWeightPreferenceDTO } from '@/types/user';
import { axiosClient } from '..';
import { handleResult } from '@/helpers/resultHandler';
import { handleError } from '@/helpers/errorHandler';

export async function updateUserWeightPreference({
  username,
  is_metric_system_choosed,
}: UpdateUserWeightPreferenceDTO): ApiResult<User> {
  try {
    const { data } = await axiosClient.patch<User>(`/${username}`, {
      is_metric_system_choosed,
    });
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}
