import { END_POINTS } from "./constants";

//  TODO: Server Service Functions

export const initGameSession = async (username, playerRole, word = "") => {
	// NOTE:  Notify Server To Start Game

	const requestUrl = process.env.REACT_APP_SERVER_URL + END_POINTS.initGame;

	return new Promise((resolve, reject) => {
		resolve(requestUrl);
	});
};

//  TODO: Login Function from actions/users
