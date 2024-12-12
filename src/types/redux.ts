import store from '@/redux/store';

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

type TypedThunkApi = {
  dispatch: AppDispatch;
  state: RootState;
};

type BaseSliceWithDataArray<T> = {
  data: T[];
};

export type { AppDispatch, BaseSliceWithDataArray, RootState, TypedThunkApi };
