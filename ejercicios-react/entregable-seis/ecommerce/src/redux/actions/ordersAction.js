import axios from 'axios';
import { setIsLoading, setAlertLoading } from '.';
import { getConfig } from '../../utils';

export const ordersAction = {
    setOrders: "GET_ORDERS"
}

export const setOrders = orders => ({
    type: ordersAction.setOrders,
    payload: orders
});


export const getOrdersThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true));
            axios
                .get("https://ecommerce-exercise-backend.herokuapp.com/orders/", getConfig())
                .then( res =>{ 
                    dispatch(setOrders(res.data))
                })
                .finally( () => dispatch(setIsLoading(false)));
    }
}