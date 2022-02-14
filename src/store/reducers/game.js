import { LOGIN } from "../actions/users";
import { START_GAME } from "../actions/game";

import { PLAYER_ROLE } from "../../utils/constants";

const initialState = {
	gameID: "",
	totalPoints: 0,
	timeStarted: new Date(),
	currentStage: {
		word: "",
		wordPoints: 0,
		playerRole: PLAYER_ROLE.role,
	},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			let newStage = { ...state.currentStage };
			newStage.playerRole = action.playerRole;
			return {
				...state,
				gameID: action.gameID,
				currentStage: newStage,
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
