import axios from 'axios';
import { history } from '../../utils';
import { setIsLoading } from '.';

export const signupThunk = data => {
    return dispatch => {
        dispatch(setIsLoading(true));
        return axios
            .post('https://ecommerce-exercise-backend.herokuapp.com/users/', data)
            .then( res => {
                history.replace("/login");
            })
            .finally( () => dispatch(setIsLoading(false)));
    };
};
