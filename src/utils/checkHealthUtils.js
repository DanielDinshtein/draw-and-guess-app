import { END_POINTS } from "./constants";

/* Check Health - Error Handler */

const onWordChoosingError = async ({ service, timestamp }) => {
	console.log("onChooseWordError");
	try {
	} catch (err) {
		// TODO: Error Handler
		console.log(" Error -> onChooseWordError");
		// console.log(err);
	}
};

const onGuessingError = async ({ service, timestamp }) => {
	console.log("onGuessError");
	try {
	} catch (err) {
		// TODO: Error Handler
		console.log(" Error -> onGuessError");
		// console.log(err);
	}
};

const onWaitingError = async ({ service, timestamp }) => {
	console.log("onWaitingError");
	try {
	} catch (err) {
		// TODO: Error Handler
		console.log(" Error -> onWaitingError");
		// console.log(err);
	}
};

const onDrawingError = async ({ service, timestamp }) => {
	console.log("onDrawingError");
	try {
	} catch (err) {
		// TODO: Error Handler
		console.log(" Error -> onDrawingError");
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
	waiting: onWaitingError,
	wordChoosing: onWordChoosingError,
	drawing: onDrawingError,
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

/*  check health - stages */

const waiting = {
	name: "waiting",
	url: process.env.REACT_APP_SERVER_URL + END_POINTS.waiting,
};

const wordChoosing = {
	name: "wordChoosing",
	url: process.env.REACT_APP_SERVER_URL + END_POINTS.wordChoosing,
};

const drawing = {
	name: "drawing",
	url: process.env.REACT_APP_SERVER_URL + END_POINTS.drawing,
};

const guessing = {
	name: "guessing",
	url: process.env.REACT_APP_SERVER_URL + END_POINTS.guessing,
};

export const services = {
	health: health,
	waiting: waiting,
	wordChoosing: wordChoosing,
	drawing: drawing,
	guessing: guessing,
};

export const refreshInterval = 2000;

export const getWithQueryParams = (username, stage) => {
	let queryUrl = services[stage].url + `?username=${username}`;
	return {
		service: { name: stage, url: queryUrl },
	};
};
