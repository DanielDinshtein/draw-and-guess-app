import React, { useState, useCallback, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import WordButton from "../components/WordButton";
import SubmitButton from "../components/SubmitButton";

import * as gameStageActions from "../store/actions/gameStage";
import { getWords } from "../utils/wordsVocabulary";
import "./WordChoosingView.css";

const WordChoosingView = (props) => {
	const startDisabled = useRef(true);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [word, setWord] = useState("");
	const [words, setWords] = useState("");
	const [wordPoints, setWordPoints] = useState(0);

	useEffect(() => {
		setWords(getWords());
	}, []);

	const onSelectWordHandler = useCallback((chosenWord, wordPoints) => {
		setWord(chosenWord);
		setWordPoints(wordPoints);
		startDisabled.current = false;
	}, []);

	const onStartDrawingHandler = () => {
		dispatch(gameStageActions.setWordDetails(word, wordPoints));
		navigate("/drawing", { state: { subtitle: "Drawing Room" } });
	};

	return (
		<div className="word-choosing-view">
			<h3>Choose Word :</h3>
			<div id="word-buttons-container">
				<WordButton word={words.easy} onWordSelect={onSelectWordHandler} difficulty={"easy"} points={1} />
				<WordButton word={words.medium} onWordSelect={onSelectWordHandler} difficulty={"medium"} points={3} />
				<WordButton word={words.hard} onWordSelect={onSelectWordHandler} difficulty={"hard"} points={5} />
			</div>
			<div id="display-chosen-word-container">
				<p id="p-underline">The word you chose</p>
				<p id="p-word">&nbsp;-&nbsp;{word}</p>
			</div>
			<SubmitButton id="start-drawing-button" disabled={startDisabled.current} onClick={onStartDrawingHandler}>
				Start Drawing
			</SubmitButton>
		</div>
	);
};

export default WordChoosingView;
