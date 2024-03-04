import { configureStore } from "@reduxjs/toolkit";
import groupReducer from "./groupSlice";
import seriesReducer from "./seriesSlice";

const store = configureStore({
    reducer: {
        group: groupReducer,
        series: seriesReducer
    }
})

export default store