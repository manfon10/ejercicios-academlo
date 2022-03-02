import axios from 'axios';
import { getConfig, history } from '../../utils';
import { setIsLoading } from '.';

export const accountDetailThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true));
        return axios
            .get('https://ecommerce-exercise-backend.herokuapp.com/users/myself/', getConfig())
            .finally( () => dispatch(setIsLoading(false)));
    };
};

export const accountEditThunk = (data) => {
    return dispatch => {
        dispatch(setIsLoading(true));
        axios
            .put(`https://ecommerce-exercise-backend.herokuapp.com/users/${data.id}/`, data,  getConfig())
            .then( () => history.replace("/account"))
            .finally( () => dispatch(setIsLoading(false)) );
    }
}