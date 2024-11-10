import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

import authSlice from './slices/auth';
import detailedExerciseListItemsSlice from './slices/detailedExerciseListItems';
import exerciseListItemsSlice from './slices/exerciseListItems';
import exerciseListsSlice from './slices/exerciseLists';
import exercisesSlice from './slices/exercises';
import loadingSlice from './slices/loading';
import themeSlice from './slices/theme';

const persistConfig = {
  storage: AsyncStorage,
  key: 'root',
  whiteList: ['theme'],
};

const rootReducer = combineReducers({
  auth: authSlice,
  loading: loadingSlice,
  exerciseLists: exerciseListsSlice,
  exerciseListItems: exerciseListItemsSlice,
  exercises: exercisesSlice,
  detailedExerciseListItems: detailedExerciseListItemsSlice,
  theme: themeSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
