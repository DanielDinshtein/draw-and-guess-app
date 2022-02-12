import React from "react";

const SubmitButton = (props) => {
	return (
		<div className="submit-button">
			<button className="submit-btn">{props.children}</button>
		</div>
	);
};

export default SubmitButton;
