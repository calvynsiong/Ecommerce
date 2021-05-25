// ! actions deals with http requests from reducers

import { ADD_TO_CART, REMOVE_FROM_CART, CART_RESET } from '../constants/cartConstants';
import axios from "axios"


export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: ADD_TO_CART, payload: {
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            quantity
        }
    })

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems))
}


export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART, payload: id
    })
    
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems))
}

