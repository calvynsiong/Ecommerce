import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    GET_PRODUCTS_DETAILS_REQUEST,
    GET_PRODUCTS_DETAILS_SUCCESS,
    GET_PRODUCTS_DETAILS_FAIL,
    GET_PRODUCTS_DETAILS_RESET,
} from "../constants/productConstants"

export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
 
export const getProductsDetailsReducer = (state = { products: {} }, action) => {
    switch (action.type) {
        case GET_PRODUCTS_DETAILS_REQUEST:
            return {
                loading: true,
            }

        case GET_PRODUCTS_DETAILS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case GET_PRODUCTS_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case GET_PRODUCTS_DETAILS_RESET:
            return {
                products: {}
            }
        default:
            return state;
    }
}