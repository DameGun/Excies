import { handleError } from '@/helpers/errorHandler';
import { handleResult } from '@/helpers/resultHandler';
import type { ApiResult } from '@/types/api';
import type { AuthResponse, LoginDTO, RegisterDTO } from '@/types/auth';

import { axiosClient } from '..';

export async function login(loginData: LoginDTO): ApiResult<AuthResponse> {
  try {
    const { data } = await axiosClient.post<AuthResponse>('/login', loginData);
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function register(registerData: RegisterDTO): ApiResult<AuthResponse> {
  try {
    const { data } = await axiosClient.post<AuthResponse>('/register', registerData);
    return handleResult(data);
  } catch (err) {
    return handleError(err);
  }
}
