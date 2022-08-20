import {combineReducers, configureStore} from "@reduxjs/toolkit"
import statusListReducer from './reducers/StatusListSlice'

const rootReducer = combineReducers({
    statusListReducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']