import axios from 'axios';
import { history } from '../../utils';
import { setIsLoading } from '.';

export const loginThunk = data => {
    return dispatch => {
      dispatch(setIsLoading(true));
        return axios
            .post('https://ecommerce-exercise-backend.herokuapp.com/login/', data)
            .then( res => {
                localStorage.setItem('tokenUser', res.data.access);
                history.replace("/shop");
            })
            .finally( () => dispatch(setIsLoading(false)));
    };
};

export const handleError = (error) => {
  if (error.response.status === 401) {
    localStorage.setItem("token", "");
    history.replace("/login");
  }
  console.log(error.response);
};