import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as seriesApi from "../../api/productSeries"
import { toast } from "react-toastify";


const initialSeries = { series: "" }

const initialState = {
    series: [], // curtain series
    loading: false,
    error: "",
    newSeries: { ...initialSeries }, // new series
    isAddSeries: false
};

export const fetchSeries = createAsyncThunk("series/fetchSeries", async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
        const { data } = await seriesApi.fetchSeries();
        // console.log(data.getAllSeries)
        return fulfillWithValue(data.result);
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.statusText);
    }
});

export const addSeries = createAsyncThunk("series/addSeries", async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
        // console.log(payload);
        const { resultSeries } = await seriesApi.createSeries(payload);
        // console.log(data)
        return fulfillWithValue(resultSeries);
    } catch (error) {
        console.log(error);
        toast.error(error.response?.data.message);
        return rejectWithValue(error.response?.data.message);
    }
});

export const editSeries = createAsyncThunk("series/editSeries", async ({ id, seriesName }, { rejectWithValue, fulfillWithValue }) => {
    try {
        await seriesApi.editSeries(id, { series: seriesName });
    } catch (error) {
        // console.log("xxx", error.response.statusText);
        // console.log("xxx", error.response?.data.message);
        console.log("xxx", error.response);
        if (error.response?.data.message.includes("Unique constraint failed on the constraint")) {
            toast.error("this series has been used");
        } else {
            toast.error(error.response?.data.message);
        }
        return rejectWithValue(error.response?.data.message);
    }
});

const seriesSlice = createSlice({
    name: "series",
    initialState,
    reducers: {
        setIsAddSeries: (state, action) => {
            state.isAddSeries = !state.isAddSeries;
        },
        onChangeNewSeriesInput: (state, action) => {
            // console.log(action.payload)
            state.newSeries = { ...state.newSeries, [action.payload.name]: action.payload.value }
        },
        onChangeSeriesInputArr: (state, action) => {
            // console.log(action.payload.name, action.payload.value);
            state.series[action.payload.index] = { ...state.series[action.payload.index], [action.payload.name]: action.payload.value }
        },
        resetNewSeriesInput: (state, action) => {
            state.newSeries = { ...initialSeries }
        }
    },
    extraReducers: (builder) => {
        // Fetch Series
        builder
            .addCase(fetchSeries.pending, (state, action) => {
                state.series = [];
                state.loading = true;
            })
            .addCase(fetchSeries.fulfilled, (state, action) => {
                state.series = action.payload.sort((a, b) => a.id - b.id);
                state.loading = false;
                state.error = "";
            })
            .addCase(fetchSeries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        // addSeries: (state, action) => { },
        builder
            .addCase(addSeries.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(addSeries.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";
            })
            .addCase(addSeries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        // editSeries: (state, action) => { },
        builder
            .addCase(editSeries.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(editSeries.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";
            })
            .addCase(editSeries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

const seriesReducer = seriesSlice.reducer;
export default seriesReducer;

const allActionCreator = seriesSlice.actions;
export const { onChangeSeriesInputArr, setIsAddSeries, onChangeNewSeriesInput, resetNewSeriesInput } = allActionCreator;