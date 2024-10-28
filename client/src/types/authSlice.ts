type AuthSliceState = {
  isLoggedIn: boolean;
  username: string | null;
  user_id: string | null;
};

type OnAuthPayload = {
  username: string | null;
  user_id: string | null;
};

export type { AuthSliceState, OnAuthPayload };
