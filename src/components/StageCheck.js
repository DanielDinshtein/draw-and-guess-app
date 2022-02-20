import { useState, useEffect } from "react";

const StageCheck = (props) => {
	const [changeState, setChangeState] = useState(false);
	const { gameID, userID, endPoint, refreshInterval, intervalRef, canvasRef, onChangeState } = props;

	useEffect(() => {
		// (1) define within effect callback scope
		const checkStageChange = async () => {
			const requestUrl = process.env.REACT_APP_SERVER_URL + endPoint;

			try {
				const response = await fetch(requestUrl, {
					method: "GET",
					credentials: "include",
					headers: { gameID: gameID, userID: userID },
				});

				// const data = await response.json();
				//  Waiting Check
				if (response.status === 200) {
					setChangeState(true);
				}
				//  Guessing Check
				else if (response.status === 204) {
					setChangeState(true);
				}
			} catch (err) {
				// TODO: Error Handler
				console.log(err);
				let message = "Error in serverService-> StageCheck";
				console.log(message);
				throw new Error(message);
			}
		};

		intervalRef.current = setInterval(async () => {
			checkStageChange(); // <-- (3) invoke in interval callback
		}, refreshInterval);

		if (changeState) {
			onChangeState();
		}
		return () => clearInterval(intervalRef.current);
	}, [canvasRef, changeState, endPoint, gameID, intervalRef, onChangeState, refreshInterval, userID]);

	return <div></div>;
};

export default StageCheck;
