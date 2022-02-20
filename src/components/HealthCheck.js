import { useState, useEffect } from "react";

const HealthCheck = (props) => {
	const [changeState, setChangeState] = useState(false);
	const { gameID, userID, endPoint, refreshInterval, intervalRef, onChangeState } = props;

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

				if (response.status === 500) {
					setChangeState(true);
				}
			
			} catch (err) {
				// TODO: Error Handler
				console.log(err);
				let message = "Error in serverService-> HealthCheck";
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
	}, [changeState, endPoint, gameID, intervalRef, onChangeState, refreshInterval, userID]);

	return <div></div>;
};

export default HealthCheck;
