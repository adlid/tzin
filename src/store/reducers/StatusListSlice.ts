import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { IStatusList } from "../../models/IStatusList"
import { fetchStatusList } from "./ActionCreators"


interface StatusListState {
    statusList: IStatusList[],
    isLoading: boolean,
    error: string
}

const initialState : StatusListState = {
    statusList: [],
    isLoading:false,
    error: ''
}

export const statusListSlice = createSlice({
    name:'statusList',
     initialState:initialState,
     reducers:{
         
     },
     extraReducers:{
         [fetchStatusList.fulfilled.type] : (state, action: PayloadAction<IStatusList[]>) => {
            state.isLoading = false;
            state.statusList = action.payload;
            state.error = '';
         },
         [fetchStatusList.pending.type] : (state) => {
            state.isLoading = true;
         },
         [fetchStatusList.rejected.type] : (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
         },
     }
})

export default statusListSlice.reducer;