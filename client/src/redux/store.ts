import { configureStore } from '@reduxjs/toolkit';

import authSlice from './slices/auth';
import detailedExerciseListItemsSlice from './slices/detailedExerciseListItems';
import exerciseListItemsSlice from './slices/exerciseListItems';
import exerciseListsSlice from './slices/exerciseLists';
import exercisesSlice from './slices/exercises';
import loadingSlice from './slices/loading';

export default configureStore({
  reducer: {
    auth: authSlice,
    loading: loadingSlice,
    exerciseLists: exerciseListsSlice,
    exerciseListItems: exerciseListItemsSlice,
    exercises: exercisesSlice,
    detailedExerciseListItems: detailedExerciseListItemsSlice,
  },
});
