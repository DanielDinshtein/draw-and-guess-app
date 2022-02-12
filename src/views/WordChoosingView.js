import React, { useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import WordButton from "../components/WordButton";

import * as gameActions from "../store/actions/game";
import { getWords } from "../utils/wordsVocabulary";
import { PLAYER_ROLE } from "../utils/constants";
import "./WordChoosingView.css";

const words = getWords();

const WordChoosingView = (props) => {
	const startDisabled = useRef(true);

	const [word, setWord] = useState("");
	const [wordPoints, setWordPoints] = useState(0);

	const isNewGame = useSelector((state) => state.game.totalPoints === 0);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onSelectWordHandler = useCallback((chosenWord, wordPoints) => {
		setWord(chosenWord);
		setWordPoints(wordPoints);
		startDisabled.current = false;
	}, []);

	const onStartDrawingHandler = async () => {
		try {
			if (isNewGame) {
				await dispatch(gameActions.startGame(PLAYER_ROLE, word, wordPoints));
				navigate("/drawing", { state: "Drawing" });
			} else {
				//  TODO: Not New Game - Update Game
				console.log("TODO: Not New Game - Update Game");
				navigate("/waiting", { state: "Waiting Room" });
			}
		} catch (err) {
			// TODO: Error Handler
			console.log(err);
		}
	};

	return (
		<div className="word-choosing-view">
			<h3>Choose Word :</h3>
			<div className="choose-word">
				<WordButton word={words.easy} onWordSelect={onSelectWordHandler} difficulty={"easy"} points={1} />
				<WordButton word={words.medium} onWordSelect={onSelectWordHandler} difficulty={"medium"} points={3} />
				<WordButton word={words.hard} onWordSelect={onSelectWordHandler} difficulty={"hard"} points={5} />
			</div>
			<div className="show-word">
				<p id="word-chose">The word you chose</p>
				<p>&nbsp;-&nbsp;{word}</p>
			</div>
			<button className="start-drawing-btn" disabled={startDisabled.current} onClick={onStartDrawingHandler}>
				Start Drawing
			</button>
		</div>
	);
};

export default WordChoosingView;
