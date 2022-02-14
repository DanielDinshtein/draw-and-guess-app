import React from "react";

// , { useEffect }
// import { useSelector, useDispatch } from "react-redux";

// import { checkStageStatues } from "../utils/serverService";

import "./WaitingView.css";

const WaitingView = (props) => {
	// const dispatch = useDispatch();

	// const [gameID, username, gameStage] = useSelector((state) => {
	// 	const { gameID } = state.game;
	// 	const { username } = state.users;
	// 	const { currentGameStage } = state.gameStage;

	// 	return [gameID, username, currentGameStage];
	// });

	// useEffect(() => {
	//     const checkStage = async () => {
	//         const result = await checkStageStatues(gameID, username);

	//         console.log(result);

	//     }
	//     checkStage();
	// }, [dispatch]);

	// console.log(gameID);
	// console.log(username);
	// console.log(gameStage);

	return (
		<div className="waiting-view">
			<h2>Waiting View</h2>
		</div>
	);
};

export default WaitingView;
