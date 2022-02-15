import React from "react";
import { HealthCheckConfig } from "@webscopeio/react-health-check";

import { onSuccessHandler, onErrorHandler, services, refreshInterval } from "../utils/checkHealthUtils";

const CheckHealth = (props) => {
	return (
		<HealthCheckConfig
			value={{ services: Object.values(services), onSuccess: onSuccessHandler, onError: onErrorHandler, refreshInterval: refreshInterval }}
		>
			{props.children}
		</HealthCheckConfig>
	);
};

export default CheckHealth;
