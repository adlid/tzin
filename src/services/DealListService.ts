 

 import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { IDealList } from '../models/IDealList'
import { ResponceResult } from '../models/IResponseResult'

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