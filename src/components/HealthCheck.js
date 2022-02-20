import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as usersActions from "../store/actions/users";
import { useNavigate } from "react-router-dom";

const HealthCheck = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
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

				if (response.status === 406 || response.status === 500) {
					alert("The other player logged out");
					await dispatch(usersActions.logout(gameID, userID));
					navigate("/", { state: { subtitle: "Welcome view" } });

					setChangeState(true);
				}
			} catch (err) {
				// TODO: Error Handler
				alert("something went wrong");
				console.log(err);
				let message = "Error in serverService-> HealthCheck";
				console.log(message);
				navigate("/", { state: { subtitle: "Welcome view" } });
				setChangeState(true);
				return;
			}
		};

		intervalRef.current = setInterval(async () => {
			checkStageChange(); // <-- (3) invoke in interval callback
		}, refreshInterval);

		if (changeState) {
			onChangeState();
		}
		return () => clearInterval(intervalRef.current);
	}, [changeState, dispatch, endPoint, gameID, intervalRef, navigate, onChangeState, refreshInterval, userID]);

	return <div></div>;
};

export default HealthCheck;
