type User = {
  id: string;
  username: string;
  password: string;
  email: string;
  isMetricSystemChoosed: boolean;
};

type UpdateUserWeightPreferenceDTO = {
  userId: string;
  isMetricSystemChoosed: boolean;
};

type UserSliceState = {
  userId: string;
  isMetricSystemChoosed: boolean;
};

export type { UpdateUserWeightPreferenceDTO, User, UserSliceState };
