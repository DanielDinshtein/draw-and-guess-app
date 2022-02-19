import { useState, useEffect } from "react";

import { END_POINTS } from "../constants";

const WordChoosingHealth = (props) => {
	const [changeState, setChangeState] = useState(false);
	const { userID, refreshInterval, intervalRef, onChangeState } = props;

	useEffect(() => {
		// (1) define within effect callback scope
		const wordChoosingState = async (userID) => {
			const requestUrl = process.env.REACT_APP_SERVER_URL + END_POINTS.wordChoosing;

			try {
				const response = await fetch(requestUrl, {
					method: "GET",
					credentials: "include",
					headers: { userID: userID },
				});

				if (response.status !== 200) {
					setChangeState(true);
				}
			} catch (err) {
				// TODO: Error Handler
				console.log(err);
				let message = "Error in serverService-> wordChoosingState";
				console.log(message);
				throw new Error(message);
			}
		};

		intervalRef.current = setInterval(async () => {
			wordChoosingState(userID); // <-- (3) invoke in interval callback
		}, refreshInterval);

		if (changeState) {
			console.log(intervalRef.current);

			onChangeState();
		}
		return () => clearInterval(intervalRef.current);
	}, [changeState, intervalRef, onChangeState, refreshInterval, userID]);

	return <div></div>;
};

export default WordChoosingHealth;
