import { SET_GAME_STAGE, SET_WORD_DETAILS } from "../actions/gameStage";
import { FINISH_DRAW } from "../actions/game";

const initialState = {
	word: "",
	wordPoints: 0,
	canvasPaths: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
		case SET_GAME_STAGE:
			return {
				...state,
				word: action.word,
				wordPoints: action.wordPoints,
				canvasPaths: action.canvasPaths,
			};
		case SET_WORD_DETAILS:
			return {
				...state,
				word: action.word,
				wordPoints: action.wordPoints,
			};
		case FINISH_DRAW:
			return {
				...state,
				canvasPaths: action.canvasPaths,
			};
		default:
			return state;
	}
};
