import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IStatusList } from "../../models/IStatusList";
import { AppDispatch } from "../store";

interface ResponceResult {
    result: 
}

export const fetchStatusList = createAsyncThunk(
    'statusList/fetchStatusList',
    async (_, thunkAPI ) => {
        const response = await axios.get<IStatusList>('https://aso-test-1.bitrix24.ru/rest/1/83go2kp1c28weuej/crm.status.list')
        return response.data.result;
    }
)