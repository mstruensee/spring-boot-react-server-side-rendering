import { INITIAL_STATE, RECEIVE_ADD_ITEM, RECEIVE_DELETE_ITEM, RECEIVE_ITEMS } from "./item.types"

export default function itemReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case RECEIVE_ITEMS: {
            const { items } = action
            return items
        }
        case RECEIVE_ADD_ITEM: {
            const { item } = action
            const newState = state.slice()
            newState.push(item)
            return newState
        }
        case RECEIVE_DELETE_ITEM: {
            const { name } = action
            return state.slice().filter((i) => i.name !== name)
        }
        default:
            return state
    }
}