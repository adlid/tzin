import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import statusListReducer from './reducers/StatusListSlice'
import LayoutReducer from './reducers/LayoutSlice'
import dealListReducer from './reducers/DealListSlice'
import { dealListApi } from "../services/DealListService"
const rootReducer = combineReducers({
    statusListReducer,
    LayoutReducer,
    dealListReducer,
     [dealListApi.reducerPath] : dealListApi.reducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(dealListApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']