import axios from 'axios';

import { transfersActions } from '../slices/transfers.slice';

const API_URL = 'http://localhost:2920/api/v1/transfers';

export const getUsersTransfers = userId => {
	return async dispatch => {
		try {
			await axios.get(`http://localhost:2920/api/v1/users/${userId}/history`)
				.then( (res) => dispatch(transfersActions.getTransfers(res.data.transfers)) );
		} catch (error) {
			console.log(error);
		}
	};
};

export const newTransfer = (amountSend, recipientAccount, rootAccount) => {
	return async dispatch => {
		try {
			await axios.post(API_URL, { amountSend, recipientAccount, rootAccount })
				.then( () => dispatch(transfersActions.newTransfer()));
			
		} catch (error) {
			console.log(error);
		}
	};
};
