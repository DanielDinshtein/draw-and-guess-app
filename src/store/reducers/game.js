import { START_GAME } from "../actions/game";

import { PLAYER_ROLE } from "../../utils/constants";

const initialState = {
	playerRole: PLAYER_ROLE,
	word: "",
	points: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
		case START_GAME:
			return {
				...state,
				playerRole: action.playerRole,
				word: action.word,
			};
		default:
			return state;
	}
};
