import { configureStore } from "@reduxjs/toolkit";
import groupReducer from "./groupSlice";
import seriesReducer from "./seriesSlice";
import productReducer from "./productSlice";

const store = configureStore({
    reducer: {
        group: groupReducer,
        series: seriesReducer,
        products: productReducer
    },
})

export default store