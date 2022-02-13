import React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

import "../views/DrawingView.css";

const Canvas = (props) => {

	const { canvasRef } = props;

	return (
		<div id="canvas-view">
			<div id="react-sketch">
				<ReactSketchCanvas ref={canvasRef} {...props} />
			</div>
			<div>{props.children}</div>
		</div>
	);
};

export default Canvas;
