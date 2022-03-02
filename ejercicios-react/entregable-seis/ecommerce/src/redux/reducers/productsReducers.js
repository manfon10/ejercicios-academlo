import { productsActions } from '../actions';

const INITIAL_STATE = {
    products: [],
    productDetail: {},
    productsCategory: [],
    productsName: []
}

const productsReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case productsActions.setProducts:
            return {
                ...state,
                products: action.payload
            }

        case productsActions.setProductDetail:
            return {
                ...state,
                productDetail: action.payload
            }

        case productsActions.setProductCategory:
            return {
                ...state,
                productsCategory: action.payload
            }
    
        default:
            return state;
    }
}

export default productsReducer;