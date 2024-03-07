import { configureStore } from '@reduxjs/toolkit';
import groupReducer from './groupSlice';
import seriesReducer from './seriesSlice';
import productReducer from './productSlice';
import wishlistReducer from './wishlistSlice';

const store = configureStore({
  reducer: {
    group: groupReducer,
    series: seriesReducer,
    products: productReducer,
    wishlists: wishlistReducer,
  },
});

export default store;
