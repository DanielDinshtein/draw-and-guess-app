import React, { useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

import CanvasButtons from "./CanvasButtons";
import "../views/DrawingView.css";

const styles = {
	border: "0.0625rem solid #9c9c9c",
	borderRadius: "0.25rem",
};

const Canvas = (props) => {
	let canvas = useRef();

	return (
		<div id="canvas-view">
			<div id="react-sketch">
				<ReactSketchCanvas ref={canvas} style={styles} strokeWidth={4} strokeColor="red" />
			</div>
			<CanvasButtons canvasRef={canvas} />
		</div>
	);
};

export default Canvas;
