import { SET_CURRENT_STAGE, SET_CHOSEN_WORD } from "../actions/gameStage";
import { FINISH_DRAW, FINISH_GUESS } from "../actions/game";

const initialState = {
	word: "",
	wordPoints: 0,
	canvasPaths: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_STAGE:
			return {
				...state,
				currentGameStage: action.gameStage,
			};
		case SET_CHOSEN_WORD:
			return {
				...state,
				word: action.word,
				wordPoints: action.wordPoints,
			};
		case FINISH_DRAW:
			return {
				...state,
				customElements: action.gameStage,
			};
		case FINISH_GUESS:
			return {
				...state,
				customElements: action.gameStage,
			};
		default:
			return state;
	}
};
