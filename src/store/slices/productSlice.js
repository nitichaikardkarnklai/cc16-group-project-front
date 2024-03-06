import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as productApi from "../../api/product"
import { toast } from "react-toastify";

const initialProduct = {
    // id: "",
    serieId: "",
    groupId: "",
    productName: "",
    // createdAt: "",
    launchDate: "",
    price: 1000,
    stockQuantity: 10,
    // isNew: false,
    // isHot: false,
    // isSoldOut: false,
    // isActive: true,
    brand: "",
    size: "",
    material: "",
    customDetail: ""
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

export const createProduct = createAsyncThunk("product/createProduct", async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
        await productApi.addProduct(payload);
        // console.log(data.getAllSeries)
        return fulfillWithValue("success");
    } catch (error) {
        console.log(error);
        return rejectWithValue("fail");
    }
});

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        onChangeNewProduct: (state, action) => {
            // console.log(action.payload.value);
            state.newProduct = { ...state.newProduct, [action.payload.name]: action.payload.value }
        },
        resetNewProductInput: (state, action) => {
            state.newProduct = { ...initialProduct }
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
        // ====== Add Product ======
        builder
            .addCase(createProduct.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                // state.products = action.payload.sort((a, b) => a.id - b.id);
                state.loading = false;
                state.error = "";
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})

const productReducer = productSlice.reducer;
export default productReducer;

const allActionCreator = productSlice.actions;
export const { onChangeNewProduct, resetNewProductInput } = allActionCreator;