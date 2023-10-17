import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";

export const getProducts = () => {
    return async (dispatch) => {
        const response = await axios.get(" http://localhost:3000/products");
        dispatch({
            type: GET_PRODUCTS,
            payload: response.data,
        });
    };
}

export const addProduct = (product) => {
    return async (dispatch) => {
        const response = await axios.post(" http://localhost:3000/products", product);
        dispatch({
            type: ADD_PRODUCT,
            payload: response.product,
        });
    };
}