import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDealList } from "../../models/IDealList";
import { fetchDealList } from "./ActionCreators";


interface DealListState {
    dealList: IDealList[],
    isLoading: boolean,
    error: string
}

const initialState : DealListState = {
    dealList: [],
    isLoading: false,
    error: ''
}


export const dealListSlice = createSlice({
    name:'dealList',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchDealList.fulfilled.type] : (state, action: PayloadAction<IDealList[]>) => {
            state.isLoading = false;
            state.dealList = action.payload;
            state.error = '';
         },
         [fetchDealList.pending.type] : (state) => {
            state.isLoading = true;
         },
         [fetchDealList.rejected.type] : (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
         },
    }
})

export default dealListSlice.reducer