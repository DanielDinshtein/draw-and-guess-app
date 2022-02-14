import { LOGIN } from "../actions/users";

import { ROLES } from "../../utils/constants";

const initialState = {
	username: null,
	playerRole: ROLES.DRAW,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return { username: action.username, playerRole: action.playerRole };
		default:
			return state;
	}
};
