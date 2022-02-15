import React from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { HealthCheckConfig } from "@webscopeio/react-health-check";

import * as gameStageActions from "../store/actions/gameStage";
import { checkAlive, checkStageHealth, refreshInterval } from "../utils/constants";

const CheckHealth = (props) => {
	const dispatch = useDispatch();
	// const navigate = useNavigate();

	const updateStage = async () => {
		try {
			await dispatch(gameStageActions.setNextStage());

			// let to = "/waiting";
			// let state = { subtitle: "Waiting Room" };

			// if (loginResult === ROLES.DRAW) {
			// 	dispatch(gameStageActions.updateGameStage(STAGES.WAIT_FOR_SECOND));
			// } else if (loginResult === ROLES.GUESS) {
			// 	dispatch(gameStageActions.updateGameStage(STAGES.WAIT_FOR_START_GUESSING));
			// } else if (!loginResult) {
			// 	to = "/";
			// 	state = { subtitle: "Welcome" };
			// }

			// navigate(to, { state: state });
		} catch (err) {
			// TODO: Error Handler
			console.log(err);
		}
	};

	const onErrorHandler = async ({ service, timestamp }) => {
		if (service.name === "stage") {
			console.log("onErrorHandler stage");
			await updateStage();
		} else if (service.name === "health") {
			// TODO: onError - health
			console.log("health On Error");
		}
		console.log("onErrorHandler");
	};

	const onSuccessHandler = ({ service, timestamp }) => {
		if (service.name === "stage") {
			console.log("onSuccessHandler stage");
		} else if (service.name === "health") {
			console.log("onSuccessHandler health");
		}
		console.log("onSuccessHandler");
	};

	const services = [checkAlive, checkStageHealth];

	return (
		<HealthCheckConfig value={{ services: services, onSuccess: onSuccessHandler, onError: onErrorHandler, refreshInterval: refreshInterval }}>
			{props.children}
		</HealthCheckConfig>
	);
};

export default CheckHealth;
