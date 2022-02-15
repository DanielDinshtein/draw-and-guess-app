import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useHealthCheck } from "@webscopeio/react-health-check";

import { ROLES, STAGES } from "../utils/constants";
import { services, onSuccessHandler, onErrorHandler } from "../utils/checkHealthUtils";

import "./WaitingView.css";

const WaitingView = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { playerRole } = useSelector((state) => state.users);

	let toStage;

	if (playerRole === ROLES.DRAW) {
		toStage = STAGES.WORD_CHOOSING;
	} else if (playerRole === ROLES.GUESS) {
		toStage = STAGES.GUESSING;
	}

	const onErrorHandler = useCallback(async ({ service, timestamp }) => {}, [dispatch]);

	const { available } = useHealthCheck({
		service: services[toStage],
		onSuccess: ({ service, timestamp }) => {
			console.log(`Service "${service.name}" is available since "${timestamp}" 🎉`);
		},
		onError: ({ service, timestamp }) => {
			console.log(`Service "${service.name}" is not available since "${timestamp}" 😔`);
		},
		refreshInterval: 2000,
	});

	// refreshInterval: 2000,

	return (
		<div className="waiting-view">
			<h2>Waiting View</h2>
			{/* {available && "Why"} */}
		</div>
	);
};

export default WaitingView;
