import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const getProducts = () => {
    return (dispatch) => {
        return axios.get(" http://localhost:3000/products").then((response) =>
            dispatch({
                type: GET_PRODUCTS,
                payload: response.data,
            })
        )
    };
}

export const addProduct = (product) => {
    return (dispatch) => {
        return axios.post(" http://localhost:3000/products", product).then(() =>
            dispatch({
                type: ADD_PRODUCT,
                payload: product,
            }))
    };
}

export const editProduct = (product) => {
    return (dispatch) => {
        return axios.put(`http://localhost:3000/products/${product.id}`, product).then(() =>
            dispatch({
                type: EDIT_PRODUCT,
                payload: product,
            }));
    };
}

export const deleteProduct = (productId) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:3000/products/${productId}`).then(() =>
            dispatch({
                type: DELETE_PRODUCT,
                payload: productId,
            }));
    };
}