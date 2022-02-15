import React from "react";
import { useHealthCheck } from "@webscopeio/react-health-check";

import "./WaitingView.css";

const WaitingView = (props) => {
	const { available, service } = useHealthCheck("stage");

	console.log(service);
	return (
		<div className="waiting-view">
			<h2>Waiting View</h2>
			{/* {available && <div>xxx</div>} */}
		</div>
	);
};

export default WaitingView;
