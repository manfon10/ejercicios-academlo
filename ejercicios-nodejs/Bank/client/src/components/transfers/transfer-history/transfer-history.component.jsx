import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux actions
import { getUsersTransfers } from '../../../store/actions/transfers.actions';

// Components
import TransferItem from '../transfer-item/transfer-item.component';

import classes from './transfer-history.module.css';

const TransferHistory = () => {
	const dispatch = useDispatch();

	const user = useSelector( state => state.users.user );

	useEffect(() => {
		dispatch(getUsersTransfers(user.id));
	}, [dispatch, user]);

	const transfers = useSelector( state => state.transfers.transfers );

	return (
		<div>
			{transfers &&
				transfers.map(transfer => <TransferItem transfer={transfer} />)}
		</div>
	);
};

export default TransferHistory;
