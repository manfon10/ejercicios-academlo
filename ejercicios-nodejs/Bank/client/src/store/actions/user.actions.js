import axios from 'axios';

import { usersActions } from '../slices/user.slice';

const API_URL = 'http://localhost:2920/api/v1/users/login';

export const login = (accountNumber, password) => {
	return async dispatch => {
		try {
			await axios.post(API_URL, { accountNumber, password })
				.then( (res) => {
					dispatch(usersActions.login(res.data));
				})
				.catch( (error) => console.log(error));
		} catch (error) {
			console.log(error);
		}
	};
};

export const signup = (name, email, password) => {
	return async dispatch => {
		try {
			// API REQUEST
		} catch (error) {
			console.log(error);
		}
	};
};

export const logout = () => {
	return async dispatch => {
		try {
			dispatch(usersActions.logout());
		} catch (error) {
			console.log(error);
		}
	};
};
