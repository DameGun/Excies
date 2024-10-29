type User = {
  id: string;
  username: string;
  password: string;
  email: string;
  role_id: string;
};

type LoginDTO = {
  username: string;
  password: string;
};

type RegisterDTO = {
  username: string;
  password: string;
  email: string;
};

type AuthResponse = {
  accessToken: string;
  username: string;
  user_id: string;
};

type AuthSliceState = {
  isLoggedIn: boolean;
  username: string | null;
  user_id: string | null;
};

type OnAuthPayload = Omit<AuthResponse, 'accessToken'>;

export type { AuthResponse, AuthSliceState, LoginDTO, OnAuthPayload, RegisterDTO, User };
