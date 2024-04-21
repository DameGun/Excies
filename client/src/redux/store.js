import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice.js";
import loadingSlice from "./slices/loadingSlice.js";
import exerciseListsSlice from './slices/exerciseListsSlice.js';

export default configureStore({
    reducer: {
        auth: authSlice,
        loading: loadingSlice,
        exerciseLists: exerciseListsSlice
    },
})