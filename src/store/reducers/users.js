import { LOGIN } from "../actions/users";

const initialState = {
	username: null,
	firstPlayer: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return { username: action.username, firstPlayer: action.firstPlayer };
		default:
			return state;
	}
};
