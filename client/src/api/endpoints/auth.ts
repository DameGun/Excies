import { handleError } from '@/helpers/errorHandler';
import { handleResult } from '@/helpers/resultHandler';
import { ApiResult } from '@/types/api';
import { LoginDTO, RegisterDTO, User } from '@/types/auth';

import { axiosClient } from '..';

export async function login(loginData: LoginDTO): ApiResult<User> {
  try {
    const { data } = await axiosClient.post('/login', loginData);
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function register(registerData: RegisterDTO): ApiResult<User> {
  try {
    const { data } = await axiosClient.post('/register', registerData);
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}
