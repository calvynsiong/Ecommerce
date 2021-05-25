import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


import { cartReducer } from "./reducers/cartReducers"
import {
    getProductsReducer,
    getProductsDetailsReducer
} from "./reducers/productReducers"

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductsDetails: getProductsDetailsReducer


})

// ! Creates asynchronous requests 

const middleware = [thunk]

const cartItemsInLocalStorage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const INITIAL_STATE = {
    cart: {
        cartItems: cartItemsInLocalStorage,
    },
};

//  ! Applies reducers + all middlewares by spreading it

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store