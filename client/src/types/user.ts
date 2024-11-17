import { RequiredUsernameParameter } from './api';

type User = {
  id: string;
  username: string;
  password: string;
  email: string;
  is_metric_system_choosed: boolean;
  role_id: string;
};

type UpdateUserWeightPreferenceDTO = RequiredUsernameParameter & {
  is_metric_system_choosed: boolean;
};

type UserSliceState = {
  isMetricSystemChoosed: boolean;
};

export type { User, UserSliceState, UpdateUserWeightPreferenceDTO };
