type LoginDTO = {
  username: string;
  password: string;
};

type RegisterDTO = {
  username: string;
  password: string;
  is_metric_system_choosed: boolean;
  email?: string;
};

type AuthResponse = {
  accessToken: string;
  username: string;
  user_id: string;
  is_metric_system_choosed: boolean;
};

type AuthSliceState = {
  isLoggedIn: boolean;
  username: string | null;
  user_id: string | null;
};

export type { AuthResponse, AuthSliceState, LoginDTO, RegisterDTO };
