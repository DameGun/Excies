import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice.js";
import loadingSlice from "./slices/loadingSlice.js";
import exerciseListsSlice from './slices/exerciseListsSlice.js';
import exercisesSlice from './slices/exercisesSlice.js';
import exerciseListItemsSlice from './slices/exerciseListItemsSlice.js';
import detailedExerciseListItemsSlice from "./slices/detailedExerciseListItemsSlice.js";

export default configureStore({
    reducer: {
        auth: authSlice,
        loading: loadingSlice,
        exerciseLists: exerciseListsSlice,
        exerciseListItems: exerciseListItemsSlice,
        exercises: exercisesSlice,
        detailedExerciseListItems: detailedExerciseListItemsSlice
    },
})