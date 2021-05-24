import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


import { cartReducer } from "./reducers/cartReducers"

const reducer = combineReducers({
    cart: cartReducer

})

// ! Creates asynchronous requests 

const middleware = [thunk]

//  ! Applies reducers + all middlewares by spreading it

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store