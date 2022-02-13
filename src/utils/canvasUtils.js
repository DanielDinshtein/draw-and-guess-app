/*  Buttons Handler Functions */

const penHandler = (canvasRef) => {
	const eraseMode = canvasRef.current?.eraseMode;

	if (eraseMode) {
		eraseMode(false);
	}
};

const eraserHandler = (canvasRef) => {
	const eraseMode = canvasRef.current?.eraseMode;

	if (eraseMode) {
		eraseMode(true);
	}
};

const undoHandler = (canvasRef) => {
	const undo = canvasRef.current?.undo;

	if (undo) {
		undo();
	}
};

const redoHandler = (canvasRef) => {
	const redo = canvasRef.current?.redo;

	if (redo) {
		redo();
	}
};

const clearHandler = (canvasRef) => {
	const clearCanvas = canvasRef.current?.clearCanvas;

	if (clearCanvas) {
		clearCanvas();
	}
};

const resetCanvasHandler = (canvasRef, propsState, initialPropsState) => {
	const resetCanvas = canvasRef.current?.resetCanvas;

	if (resetCanvas) {
		resetCanvas();

		for (const [prop, initialValue] of Object.entries(initialPropsState)) {
			propsState[prop].setter(initialValue);
		}
	}
};

/*  Button Handlers List */

export const buttonsHandlers = [
	["Undo", undoHandler, "primary"],
	["Pen", penHandler, "secondary"],
	["Clear All", clearHandler, "primary"],
	["Redo", redoHandler, "primary"],
	["Eraser", eraserHandler, "secondary"],
	["Reset All", resetCanvasHandler, "primary"],
];

/*  Form Handlers List */

export const formProps = [
	["color", "strokeColor"],
	["color", "canvasColor"],
	["range", "strokeWidth"],
	["range", "eraserWidth"],
];
