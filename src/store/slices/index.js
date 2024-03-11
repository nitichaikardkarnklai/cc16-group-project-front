import { configureStore } from '@reduxjs/toolkit';
import groupReducer from './groupSlice';
import seriesReducer from './seriesSlice';
import productReducer from './productSlice';
import wishlistReducer from './wishlistSlice';
import cartReducer from './cartSlice';

const store = configureStore({
    reducer: {
        group: groupReducer,
        series: seriesReducer,
        products: productReducer,
        wishlists: wishlistReducer,
        cart: cartReducer,
    },
});

export default store;