import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice.js";
import loadingSlice from "./slices/loadingSlice.js";
import exercisesSlice from "./slices/exercisesSlice.js";

export default configureStore({
    reducer: {
        auth: authSlice,
        loading: loadingSlice,
        exercises: exercisesSlice
    },
})