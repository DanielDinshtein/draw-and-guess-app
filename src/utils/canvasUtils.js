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

const resetCanvasHandler = (canvasRef) => {
	const resetCanvas = canvasRef.current?.resetCanvas;

	if (resetCanvas) {
		resetCanvas();
	}
};

/*  Button Handlers List */

export const buttonsHandlers = [
	["Undo", undoHandler, "primary"],
	["Redo", redoHandler, "primary"],
	["Clear All", clearHandler, "primary"],
	["Reset All", resetCanvasHandler, "primary"],
	["Pen", penHandler, "secondary"],
	["Eraser", eraserHandler, "secondary"],
];
