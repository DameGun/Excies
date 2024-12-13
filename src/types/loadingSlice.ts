import type { LoadingState } from '@/constants/loading';

type LoadingSliceState = {
  code?: string | number;
  status: LoadingState;
  errorMessage?: string;
};

export type { LoadingSliceState };
