import { ADD_TO_CART, REMOVE_FROM_CART, CART_RESET } from '../constants/cartConstants';

// ! Setting default state + checking reducers

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = action.payload;
            const existItem = state.cartItems.find((item) => item.product === newItem.product);
            if (!existItem) {
                return {
                    ...state,
                    cartItems: [...state.cartItems, newItem],
                };
            } else {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.product === existItem.product ? newItem : item,
                    ),
                };
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.product !== action.payload),
            };
        case CART_RESET:
            return { ...state, cartItems: [] };

        default:
            return state;
    }
};
