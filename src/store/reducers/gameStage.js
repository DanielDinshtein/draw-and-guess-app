import { UPDATE_GAME_STAGE } from "../actions/gameStage";

import { STAGES } from "../../utils/constants";

const initialState = {
	word: "",
	wordPoints: 0,
	currentGameStage: STAGES.WAITING,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_GAME_STAGE:
			return {
				...state,
				currentGameStage: action.gameStage,
			};
		default:
			return state;
	}
};
