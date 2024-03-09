import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as wishlistApi from '../../api/wishlist';
import { flushSync } from 'react-dom';

const initialState = {
  wishlistItems: [],
  loading: false,
  error: '',
};

export const fetchWishlist = createAsyncThunk(
  'wishlist/fetchWishlist',
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await wishlistApi.getWishlist();
      return fulfillWithValue(data.resultWatchList);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.statusText);
    }
  }
);

export const addWishlist = createAsyncThunk(
  'wishlist/addWishlist',
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      await wishlistApi.createWishlist(payload);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.statusText);
    }
  }
);

export const removeWishlist = createAsyncThunk(
  'wishlist/removeWishlist',
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      await wishlistApi.deleteWishlist(payload);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.statusText);
    }
  }
);

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ======fetch wishlist ======
    builder
      .addCase(fetchWishlist.pending, (state, action) => {
        state.wishlistItems = [];
        state.loading = true;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.wishlistItems = action.payload;
        state.loading = false;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // ====== add item to wishlist ======
    builder
      .addCase(addWishlist.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addWishlist.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // ====== remove item from wishlist ======
    builder
      .addCase(removeWishlist.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(removeWishlist.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(removeWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const wishlistReducer = wishlistSlice.reducer;
export default wishlistReducer;

const allActionCreator = wishlistSlice.actions;
export const {} = allActionCreator;
