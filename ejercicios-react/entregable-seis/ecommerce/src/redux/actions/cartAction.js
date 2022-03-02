import axios from 'axios';
import { getConfig, history } from '../../utils';
import { setIsLoading } from '.';

export const cartActions = {
    setCartItems: "GET_CART_ITEMS"
}

export const setCartItems = cartItems => ({
    type: cartActions.setCartItems,
    payload: cartItems
})

export const getProductsCartThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true));
        axios
          .get('https://ecommerce-exercise-backend.herokuapp.com/cart/', getConfig() )
          .then( res => dispatch(setCartItems(res.data)) )
          .finally( () => dispatch(setIsLoading(false)));
    };
};

export const deleteItemCartThunk = (id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .delete(`https://ecommerce-exercise-backend.herokuapp.com/cart/${id}/remove_item/`, getConfig() )
      .then( () => dispatch(getProductsCartThunk()))
      .finally( () => dispatch(setIsLoading(false)));
  };
};

export const buyProductsThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .post(`https://ecommerce-exercise-backend.herokuapp.com/cart/buy/`, {}, getConfig() )
      .finally( () => dispatch(setIsLoading(false)));
  };
};

export const updateQuantityThunk = (id, quantity) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .put(`https://ecommerce-exercise-backend.herokuapp.com/cart/${id}/change_quantity/`, { quantity: quantity }, getConfig())
      .then( () => dispatch(getProductsCartThunk()) )
      .finally( () => dispatch(setIsLoading(false)) )

  }
}