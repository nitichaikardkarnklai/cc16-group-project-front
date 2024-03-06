import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as productApi from "../../api/product"
import { toast } from "react-toastify";

const initialProduct = {
    id: "",
    serieId: "",
    groupId: "",
    productName: "",
    createdAt: "",
    launchDate: "",
    price: "",
    stockQuantity: "",
    isNew: false,
    isHot: false,
    isSoldOut: false,
    isActive: true,
    brand: "",
    size: "",
    material: "",
    customDetail: "",
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
        // console.log(data.resultAllProduct)
        return fulfillWithValue(data.resultAllProduct);
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.statusText);
    }
});


console.log(fetchAllProduct)

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

        onChangeProductInput: (state, action) => {
            // console.log(action.payload)
            state.newProduct = { ...state.newProduct, [action.payload.name]: action.payload.value }
        },
        onChangeProductInputArr: (state, action) => {
            state.newProduct = { ...state.newProduct, [action.payload.name]: action.payload.value }
        },
        onchangeIsAddProduct: (state, action) => {
            state.isAddProduct = !state.isAddProduct
        }
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

const allActionCreators = productSlice.actions;
export const { onChangeProductInput, onChangeProductInputArr, onchangeIsAddProduct } = allActionCreators;
