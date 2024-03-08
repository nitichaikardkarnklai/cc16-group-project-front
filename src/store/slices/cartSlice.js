import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as cartApi from '../../api/cart';

const initialState = {
  itemsInCart: [],
  loading: false,
  error: '',
};

// ====== fetch cart ======
export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await cartApi.seeItemInCart();
      return fulfillWithValue(data.cart);
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.statusText);
    }
  }
);

// //====== upsert item into cart ======
// const upsertItemIntoCart = createAsyncThunk(
//   'cart/addItem',
//   async (payload, { rejectWithValue, fulfillWithValue }) => {
//     try {
//       await cartApi.upsertIntoCart(payload);
//     } catch (err) {
//       console.log(err);
//       return rejectWithValue(error.response.statusText);
//     }
//   }
// );

// //====== remove item from cart ======
// const removeItemFromCart = createAsyncThunk(
//   'cart/removeItem',
//   async (payload, { rejectWithValue, fulfillWithValue }) => {
//     try {
//       await cartApi.removeFromCart(payload);
//     } catch (err) {
//       console.log(err);
//       return rejectWithValue(error.response.statusText);
//     }
//   }
// );

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //====== fetch cart ======
    builder
      .addCase(fetchCart.pending, (state, action) => {
        state.itemsInCart = [];
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.itemsInCart = action.payload;
        state.loading = false;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const cartReducer = cartSlice.reducer;
export default cartReducer;

const allActionCreator = cartSlice.actions;
export const {} = allActionCreator;
