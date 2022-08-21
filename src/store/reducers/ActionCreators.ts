import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IDealList } from "../../models/IDealList";
import { ResponceResult } from "../../models/IResponseResult";
import { IStatusList } from "../../models/IStatusList";

export const fetchStatusList = createAsyncThunk(
    'statusList/fetchStatusList',
    async (_, thunkAPI ) => {
        try{
            const response = await axios.get< ResponceResult<IStatusList>>('https://aso-test-1.bitrix24.ru/rest/1/83go2kp1c28weuej/crm.status.list')
            return response.data.result;
        }
        catch (e){
            return thunkAPI.rejectWithValue("Something get with wrong")
        }
    }
)


export const fetchDealList = createAsyncThunk(
    'dealList/fetchStatusList',
    async (_, thunkAPI ) => {
        try{
            const response = await axios.get< ResponceResult<IDealList>>('https://aso-test-1.bitrix24.ru/rest/1/83go2kp1c28weuej/crm.deal.list')
            return response.data.result;
        }
        catch (e){
            return thunkAPI.rejectWithValue("Something get with wrong")
        }
    }
)