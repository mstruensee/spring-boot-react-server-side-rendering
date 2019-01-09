import { combineReducers } from "redux"
import { listReducer } from "@wecreatesoftware/redux-higher-order-reducers"

const ITEMS_REDUCER = "ITEMS_REDUCER"

export const reducers = combineReducers({
    [ ITEMS_REDUCER ]: listReducer({ reducerName: ITEMS_REDUCER, key: "id" })
})
