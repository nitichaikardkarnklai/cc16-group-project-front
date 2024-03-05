import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as groupApi from "../../api/productGroup"
import { toast } from "react-toastify";


const initialGroup = { group: "", categories: "" }

const initialState = {
    groups: [],
    loading: false,
    error: "",
    group: { ...initialGroup } // newGroup
};

export const fetchGroups = createAsyncThunk("group/fetchGroups", async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
        const { data } = await groupApi.fetchGroup();
        // console.log(data.getAllGroup)
        return fulfillWithValue(data.getAllGroup);
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.statusText);
    }
});

export const addGroup = createAsyncThunk("group/addGroup", async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
        // console.log(payload);
        await groupApi.createGroup(payload);
        // const { data } = await groupApi.createGroup(payload);
        // console.log(data)
        // return fulfillWithValue(data);
    } catch (error) {
        // console.log(error);
        toast.error(error.response?.data.message);
        return rejectWithValue(error.response?.data.message);
    }
});

export const editGroup = createAsyncThunk("group/editGroup", async ({ id, categories }, { rejectWithValue, fulfillWithValue }) => {
    try {
        await groupApi.editGroup(id, categories);
    } catch (error) {
        // console.log("xxx", error.response.statusText);
        // console.log("xxx", error.response?.data.message);
        toast.error(error.response?.data.message);
        return rejectWithValue(error.response?.data.message);
    }
});

const groupSlice = createSlice({
    name: "group",
    initialState,
    reducers: {
        onChangeGroupInput: (state, action) => {
            // console.log(action.payload)
            state.group = { ...state.group, [action.payload.name]: action.payload.value }
            // state.group = {...group, action.payload};
        },
        onChangeGroupsInput: (state, action) => {
            // console.log(action.payload.index);
            state.groups[action.payload.index] = { ...state.groups[action.payload.index], [action.payload.name]: action.payload.value }
        },
        resetGroupInput: (state, action) => {
            state.group = { ...initialGroup }
        }
    },
    extraReducers: (builder) => {
        // Fetch Group
        builder
            .addCase(fetchGroups.pending, (state, action) => {
                state.groups = [];
                state.loading = true;
            })
            .addCase(fetchGroups.fulfilled, (state, action) => {
                state.groups = action.payload;
                state.loading = false;
                state.error = "";
            })
            .addCase(fetchGroups.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        // addGroup: (state, action) => { },
        builder
            .addCase(addGroup.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(addGroup.fulfilled, (state, action) => {
                state.group = action.payload;
                state.loading = false;
                state.error = "";
            })
            .addCase(addGroup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        // editGroup: (state, action) => { },
        builder
            .addCase(editGroup.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(editGroup.fulfilled, (state, action) => {
                // state.group = action.payload;
                state.loading = false;
                state.error = "";
            })
            .addCase(editGroup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

const groupReducer = groupSlice.reducer;
export default groupReducer;

const allActionCreator = groupSlice.actions;
export const { onChangeGroupInput, onChangeGroupsInput, resetGroupInput } = allActionCreator;