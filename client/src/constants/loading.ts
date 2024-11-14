export const MAX_REQUEST_WAITING_EXPIRE_TIME = 8000;
export const MIN_REQUEST_WAITING_EXPIRE_TIME = 200;

export enum LoadingState {
  Idle = 'idle',
  Loading = 'loading',
  Failed = 'failed',
}
