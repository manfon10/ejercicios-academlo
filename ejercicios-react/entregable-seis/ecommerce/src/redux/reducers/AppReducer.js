import { appAction } from '../actions';

const INITIAL_STATE = {
    isLoading: false,
    alertLoading: false
}

const appReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case appAction.setIsLoading:
            return {
                ...state,
                isLoading: action.payload
            }
        case appAction.setAlertLoading:
            return {
                ...state,
                alertLoading: action.payload
            }

        default:
            return state;
    }
}

export default appReducer;