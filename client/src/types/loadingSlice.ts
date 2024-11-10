import type { LoadingState } from '@/constants/loading';

type LoadingSliceState = {
  status: LoadingState;
  errorMessage?: string;
};

type SetStatusPayload = Omit<LoadingSliceState, 'showLoading'>;

export type { LoadingSliceState, SetStatusPayload };
