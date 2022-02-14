import { LOGIN } from "../actions/users";
import { START_GAME } from "../actions/game";

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
		case START_GAME:
			return {
				...state,
				word: action.word,
				wordPoints: action.wordPoints,
				playerRole: action.playerRole,
			};
		default:
			return state;
	}
};
