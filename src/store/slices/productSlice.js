import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as productApi from "../../api/product"
import { toast } from "react-toastify";

const initialProduct = {
    id: null,
    serieId: null,
    groupId: null,
    productName: null,
    createdAt: null,
    launchDate: null,
    price: null,
    stockQuantity: null,
    isNew: false,
    isHot: false,
    isSoldOut: false,
    isActive: true,
    brand: null,
    size: null,
    material: null,
    customDetail: null
};

const initialState = {
    products: [], // curtain products
    newProduct: { ...initialProduct }, // new product
    loading: false,
    error: "",
    isAddProduct: false
};


export const fetchAllProduct = createAsyncThunk("product/fetchAllProduct", async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
        const { data } = await productApi.fetchAllProduct();
        // console.log(data.getAllSeries)
        return fulfillWithValue(data.resultAllProduct);
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.statusText);
    }
});

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // ====== Fetch All Products ======
        builder
            .addCase(fetchAllProduct.pending, (state, action) => {
                state.products = [];
                state.loading = true;
            })
            .addCase(fetchAllProduct.fulfilled, (state, action) => {
                // state.products = action.payload.sort((a, b) => a.id - b.id);
                state.products = action.payload;
                state.loading = false;
                state.error = "";
            })
            .addCase(fetchAllProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})

const productReducer = productSlice.reducer;
export default productReducer;

const allActionCreator = productSlice.actions;
export const { } = allActionCreator;