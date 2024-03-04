import { configureStore } from "@reduxjs/toolkit";
import groupReducer from "./groupSlice";

const store = configureStore({
    reducer: {
        group: groupReducer,
        // category: categoryReducer
    }
})

export default store