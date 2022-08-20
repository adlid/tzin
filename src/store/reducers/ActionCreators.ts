import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IStatusList } from "../../models/IStatusList";
import { AppDispatch } from "../store";

interface ResponceResult<T>{
    result: T,
    total:number,
    time:{
        start: number
        finish: number
        duration: number
        processing: number
        date_start: string
        date_finish: string
        operating_reset_at: number
        operating: number
    }
}

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