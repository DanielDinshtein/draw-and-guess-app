import { LOGIN, LOGOUT } from "../actions/users";
import { START_GAME, FINISH_GUESS, SET_TOTAL_POINTS } from "../actions/game";

const initialState = {
	gameID: "",
	totalPoints: 0,
	startTime: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				gameID: action.gameID,
			};
		case START_GAME:
			return {
				...state,
				startTime: action.startTime,
			};
		case FINISH_GUESS:
			return {
				...state,
				totalPoints: action.totalPoints,
			};
		case LOGOUT:
			return {
				gameID: "",
				totalPoints: 0,
				startTime: "",
			};
		case SET_TOTAL_POINTS:
			return {
				...state,
				totalPoints: action.totalPoints,
			};
		default:
			return state;
	}
};
