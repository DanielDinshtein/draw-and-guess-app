import React from "react";

import { buttonsHandlers } from "../utils/canvasUtils";

const CanvasButtons = (props) => {
	const { canvasRef } = props;

	return (
		<div>
			{buttonsHandlers.map(([label, handler, themeColor]) => (
				<button key={label} className="canvas-btn-block" id={`btn-${themeColor}`} type="button" onClick={handler.bind(this, canvasRef)}>
					{label}
				</button>
			))}
		</div>
	);
};

export default CanvasButtons;
