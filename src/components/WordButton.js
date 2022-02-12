import React from "react";

import "../views/WordChoosingView.css";

const WordButton = (props) => {
	const { word, difficulty, points, wordChoose } = props;

	return (
		<div className="word-container">
			<button className="btn" id={difficulty} onClick={() => wordChoose(word, points)}>
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
