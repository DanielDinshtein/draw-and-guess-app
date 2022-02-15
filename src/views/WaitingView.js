import React from "react";

import { useHealthCheck } from "@webscopeio/react-health-check";

import { services } from "../utils/checkHealthUtils";

import "./WaitingView.css";

const WaitingView = (props) => {
	try {
		useHealthCheck({
			service: services["waiting"],
			onSuccess: ({ service, timestamp }) => {},
			onError: ({ service, timestamp }) => {},
			refreshInterval: 2000,
		});
	} catch (err) {
		console.log("what");
	}

	return (
		<div className="waiting-view">
			<h2>Waiting View</h2>
		</div>
	);
};

export default WaitingView;
