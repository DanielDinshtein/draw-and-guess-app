import { END_POINTS } from "./constants";

/* User -  Server Functions  */

export const userLogin = async (username) => {
	const requestUrl = process.env.REACT_APP_SERVER_URL + END_POINTS.login;

	try {
		return await fetch(requestUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: username,
			}),
		});
	} catch (err) {
		// TODO: Error Handler
		console.log(err);
		let message = "Error in serverService->userLogin";
		console.log(message);
		throw new Error(message);
	}
};

/* Game -  Server Functions  */

export const initGameSession = async (username, playerRole, word = "") => {
	// NOTE:  Notify Server To Start Game

	const requestUrl = process.env.REACT_APP_SERVER_URL + END_POINTS.initGame;

	return new Promise((resolve, reject) => {
		resolve(requestUrl);
	});
};

export const sendDrawDetails = async (username, word, wordPoints, canvasPath) => {
	const requestUrl = process.env.REACT_APP_SERVER_URL + END_POINTS.drawDetails;

	try {
		return await fetch(requestUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: username,
				word: word,
				wordPoints: wordPoints,
				canvasPath: canvasPath,
			}),
		});
	} catch (err) {
		// TODO: Error Handler
		console.log(err);
		let message = "Error in serverService->sendDrawDetails";
		console.log(message);
		throw new Error(message);
	}
};

/* 'Health Check' - Game Stage Management  Server Functions  */

export const checkStageStatues = async (gameID, username) => {
	const requestUrl = process.env.REACT_APP_SERVER_URL + END_POINTS.login;

	try {
		return await fetch(requestUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: username,
			}),
		});
	} catch (err) {
		// TODO: Error Handler
		console.log(err);
		let message = "Error in serverService->userLogin";
		console.log(message);
		throw new Error(message);
	}
};
