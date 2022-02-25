import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as gameActions from "../store/actions/game";

const StageCheck = (props) => {
	const dispatch = useDispatch();
	const [changeState, setChangeState] = useState(false);
	const { totalPoints } = useSelector((state) => state.game);
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
				} else if (response.status === 202) {
					const data = await response.json();

					if (data.points !== totalPoints) {
						dispatch(gameActions.setTotalPoints(data.points));
					}
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
	}, [canvasRef, changeState, dispatch, endPoint, gameID, intervalRef, onChangeState, refreshInterval, totalPoints, userID]);

	return <div></div>;
};

export default StageCheck;
