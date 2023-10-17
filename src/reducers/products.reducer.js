import { GET_PRODUCTS } from "../actions/products.actions";
import { ADD_PRODUCT } from "../actions/products.actions";

const initialState = {}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.payload
        case ADD_PRODUCT:
            return state
        default:
            return state
    }
}
