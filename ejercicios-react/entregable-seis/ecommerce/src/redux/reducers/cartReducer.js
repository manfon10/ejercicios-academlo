import { cartActions } from '../actions';

const INITIAL_STATE = {
    cartItems: [],
}

const cartReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActions.setCartItems:
            return {
                ...state,
                cartItems: action.payload
            }
    
        default:
            return state;
    }
}

export default cartReducer;