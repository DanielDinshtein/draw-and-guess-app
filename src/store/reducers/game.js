import { LOGIN } from "../actions/users";
import { INIT_GAME } from "../actions/game";

const initialState = {
	gameID: "",
	totalPoints: 0,
	timeStarted: new Date(),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				gameID: action.gameID,
			};
		case INIT_GAME:
			return {
				...state,
				gameID: action.gameID,
				timeStarted: action.timeStarted,
			};
		default:
			return state;
	}
};
