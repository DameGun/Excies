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

export type { LoginDTO, RegisterDTO, User };
