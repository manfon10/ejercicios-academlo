import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuth: false,
	user: [],
	error: null,
};

const userSlice = createSlice({
	initialState,
	name: 'users',
	reducers: {
		login(state, action) {
			state.isAuth = true;
			state.user = action.payload;
		},
		logout(state) {
			state.isAuth = false;
			state.user = null;
		},
	},
});

export const usersActions = userSlice.actions;
export default userSlice.reducer;
