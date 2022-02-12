import React from "react";

const SubmitButton = (props) => {
	return (
		<div >
			<button className="submit-btn" {...props}>{props.children}</button>
		</div>
	);
};

export default SubmitButton;
