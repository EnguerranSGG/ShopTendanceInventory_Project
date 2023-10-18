import { GET_PRODUCTS } from "../actions/products.actions";
import { DELETE_PRODUCT } from "../actions/products.actions";
import { ADD_PRODUCT } from "../actions/products.actions";
import { EDIT_PRODUCT } from "../actions/products.actions";


const initialState = {}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.payload
        case ADD_PRODUCT:
            return [action.payload, ...state]
        case EDIT_PRODUCT:
            return state.map((product) => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        title: action.payload.title,
                        description: action.payload.description,
                        basePrice: action.payload.basePrice,
                        salePrice: action.payload.salePrice,
                        categories: action.payload.categories,
                        imageUrl: action.payload.imageUrl
                    }
                } else {
                    return product
                }
            })
        case DELETE_PRODUCT:
            return state.filter((product) => product.id != action.payload);
        default:
            return state
    }
}
