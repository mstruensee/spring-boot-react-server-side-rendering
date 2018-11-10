import { combineReducers } from "redux"
import items from "./components/item/item.reducer"

const reducers = combineReducers({ items })
export { reducers }