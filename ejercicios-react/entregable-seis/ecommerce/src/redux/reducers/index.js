import { combineReducers } from 'redux';
import appRouter from './AppReducer';
import productsReducer from './productsReducers';
import cartReducer from './cartReducer';
import ordersReducer from './ordersReducer';

const rootReducer = combineReducers({
    app: appRouter,
    products: productsReducer,
    cartItems: cartReducer,
    orders: ordersReducer
});

export default rootReducer;