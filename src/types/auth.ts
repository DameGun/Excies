type LoginDTO = {
  username: string;
  password: string;
};

type RegisterDTO = {
  username: string;
  password: string;
  isMetricSystemChoosed: boolean;
  email?: string;
};

type AuthResponse = {
  accessToken: string;
  username: string;
  userId: string;
  isMetricSystemChoosed: boolean;
};

type AuthSliceState = {
  isLoggedIn: boolean;
  userId: string | null;
};

export type { AuthResponse, AuthSliceState, LoginDTO, RegisterDTO };
