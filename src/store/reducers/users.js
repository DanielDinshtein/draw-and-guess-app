import { LOGIN, LOGOUT } from "../actions/users";

import { FINISH_DRAW, FINISH_GUESS } from "../actions/game";

const initialState = {
	userID: "",
	username: "",
	playerRole: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return { userID: action.userID, username: action.username, playerRole: action.playerRole };
		case FINISH_DRAW:
			return {
				...state,
				playerRole: action.playerRole,
			};
		case FINISH_GUESS:
			return {
				...state,
				playerRole: action.playerRole,
			};
		case LOGOUT:
			return {
				userID: "",
				username: "",
				playerRole: "",
			};
		default:
			return state;
	}
};
