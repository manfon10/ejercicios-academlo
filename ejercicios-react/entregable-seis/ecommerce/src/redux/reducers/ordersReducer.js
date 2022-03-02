import { ordersAction } from '../actions';

const INITIAL_STATE = {
    orders: [],
}

const ordersReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ordersAction.setOrders:
            return {
                ...state,
                orders: action.payload
            }
    
        default:
            return state;
    }
}

export default ordersReducer;