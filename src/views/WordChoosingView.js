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
	const isNewGame = useSelector((state) => state.game.points === 0);
	const [word, setWord] = useState("");
	const startDisabled = useRef(true);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const wordChoose = useCallback((event) => {
		setWord(words[event.target.id]);
		startDisabled.current = false;
	}, []);

	const onStartDrawingHandler = async () => {
		try {
			if (isNewGame) {
				await dispatch(gameActions.startGame(word, PLAYER_ROLE));
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
				<WordButton word={words.easy} wordChoose={wordChoose} difficulty={"easy"} points={1} />
				<WordButton word={words.medium} wordChoose={wordChoose} difficulty={"medium"} points={3} />
				<WordButton word={words.hard} wordChoose={wordChoose} difficulty={"hard"} points={5} />
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
