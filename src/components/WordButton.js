import React from "react";

import "../views/WordChoosingView.css";

const WordButton = (props) => {
	const { word, difficulty, points, onWordSelect } = props;

	return (
		<div className="word-container">
			<button className="btn" id={difficulty} onClick={() => onWordSelect(word, points)}>
				{word}
			</button>
			<div className="word-difficulty">
				<p className="difficulty">{difficulty} - </p>
				<p className="points">{points} pt</p>
			</div>
		</div>
	);
};

export default WordButton;
