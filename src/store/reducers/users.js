import { LOGIN } from "../actions/users";

//  TODO: change 'firstPlayer' Into -> PLAYER_ROLE

const initialState = {
	username: null,
	playerRole: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return { username: action.username, firstPlayer: action.playerRole };
		default:
			return state;
	}
};
