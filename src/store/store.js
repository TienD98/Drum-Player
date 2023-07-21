import { configureStore } from "@reduxjs/toolkit";
import DrumReducer from "../features/drumSlice"

const store = configureStore({
    reducer: {
        drum: DrumReducer,
    }
}) 

export default store;