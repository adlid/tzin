 

 import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { IDealList } from '../models/IDealList'

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

 export const dealListApi = createApi({
    reducerPath: 'dealList',
    baseQuery:fetchBaseQuery({baseUrl:'https://aso-test-1.bitrix24.ru/rest/1/83go2kp1c28weuej/'}),
    endpoints:(build)=>({
        fetchAllDealList: build.query<ResponceResult<IDealList[]>, any>({
             query: () => ({
                url : '/crm.deal.list'
             })
        })
    })
 })