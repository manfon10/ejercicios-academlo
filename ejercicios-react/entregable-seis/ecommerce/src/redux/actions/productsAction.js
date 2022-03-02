import axios from 'axios';
import { setIsLoading, setAlertLoading } from '.';
import { getConfig } from '../../utils';

export const productsActions = {
    setProducts: "GET_PRODUCTS",
    setProductDetail: "GET_PRODUCT_DETAIL",
    setProductCategory: "GET_PRODUCTS_CATEGORY",
}

export const setProducts = products => ({
    type: productsActions.setProducts,
    payload: products
});

export const setProductDetail = product => ({
    type: productsActions.setProductDetail,
    payload: product
});

export const setProductCategory = category => ({
    type: productsActions.setProductCategory,
    payload: category
});

export const getProductsThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true));
            axios
                .get('https://ecommerce-exercise-backend.herokuapp.com/products/', getConfig())
                .then( res => dispatch(setProducts(res.data)))
                .finally( () => dispatch(setIsLoading(false)));
    }
}

export const getProductDetailThunk = (id) => {
    return dispatch => {
        dispatch(setIsLoading(true));
            return axios
                .get(`https://ecommerce-exercise-backend.herokuapp.com/products/${id}/`, getConfig())
                .then( res =>{ 
                    dispatch(setProductDetail(res.data))
                    dispatch(filterCategoryThunk(res.data.category.id))
                })
                .finally( () => dispatch(setIsLoading(false)));
    }
}

export const addProductCart = (product) => {
    return dispatch => {
        dispatch(setIsLoading(true));
            return axios
                .post(`https://ecommerce-exercise-backend.herokuapp.com/products/add_to_cart/`, product, getConfig())
                .then( () => dispatch(setAlertLoading(true) ))
                .finally( () => {
                    setTimeout(() => {
                        dispatch(setAlertLoading(false))
                    }, 3000);
                    dispatch(setIsLoading(false))
                });
    }
}

export const filterCategoryThunk = (id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .get(`https://ecommerce-exercise-backend.herokuapp.com/products/?category=${id}`, getConfig() )
      .then( res => dispatch(setProductCategory(res.data)))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const filterCategoryProductThunk = (id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .get(`https://ecommerce-exercise-backend.herokuapp.com/products/?category=${id}`, getConfig() )
      .then( res => dispatch(setProducts(res.data)))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const filterNameThunk = (name) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .get(`https://ecommerce-exercise-backend.herokuapp.com/products/?name__icontains=${name}`, getConfig() )
      .then( res => dispatch(setProducts(res.data)))
      .finally(() => dispatch(setIsLoading(false)));
  };
};