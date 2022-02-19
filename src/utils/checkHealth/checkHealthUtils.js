import { END_POINTS } from "../constants";

/* Check Health - Error Handler */

const onWordChoosingError = async ({ service, timestamp }) => {
	console.log("onWordChoosingError");
	try {
	} catch (err) {
		// TODO: Error Handler
		console.log(" Error -> onWordChoosingError");
		// console.log(err);
	}
};

const onGuessingError = async ({ service, timestamp }) => {
	console.log("onGuessingError");
	try {
	} catch (err) {
		// TODO: Error Handler
		console.log(" Error -> onGuessingError");
		// console.log(err);
	}
};

const onHealthError = async ({ service, timestamp }) => {
	console.log("onHealthError");
	try {
	} catch (err) {
		// TODO: Error Handler
		console.log(" Error -> onHealthError");
		// console.log(err);
	}
};

const errorsHandlers = {
	health: onHealthError,
	wordChoosing: onWordChoosingError,
	guessing: onGuessingError,
};

export const onErrorHandler = ({ service, timestamp }) => {
	return errorsHandlers[service.name];
};

export const onSuccessHandler = ({ service, timestamp }) => {};

/* Check Health - Server */

const health = {
	name: "health",
	url: process.env.REACT_APP_SERVER_URL + END_POINTS.health,
};



const wordChoosing = {
	name: "wordChoosing",
	url: './src/utils/checkHealth/wordChoosingHealth.js',
};

// const wordChoosing = {
// 	name: "wordChoosing",
// 	url: process.env.REACT_APP_SERVER_URL + END_POINTS.wordChoosing,
// };

const guessing = {
	name: "guessing",
	url: process.env.REACT_APP_SERVER_URL + END_POINTS.guessing,
};

export const services = {
	health: health,
	wordChoosing: wordChoosing,
	guessing: guessing,
};

export const refreshInterval = 2000;
