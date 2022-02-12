import { START_GAME } from "../actions/game";

import { PLAYER_ROLE } from "../../utils/constants";

const initialState = {
	word: "",
	wordPoints: 0,
	totalPoints: 0,
	playerRole: PLAYER_ROLE,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
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
