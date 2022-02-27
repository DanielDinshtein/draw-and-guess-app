import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useElapsedTime } from "use-elapsed-time";

const Header = (props) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const { elapsedTime, reset } = useElapsedTime({ isPlaying, updateInterval: 0.11 });

	const [username, totalPoints, startTime] = useSelector((state) => {
		return [state.users.username, state.game.totalPoints, state.game.startTime];
	});

	useEffect(() => {
		if (startTime !== "") {
			setIsPlaying(true);
		} else {
			reset();
			setIsPlaying(false);
		}
	}, [reset, startTime]);

	return (
		<div className="App-header">
			<div className="header-username">{username}</div>
			{username && (
				<div className="header-username" id="points">
					Point - {totalPoints}
				</div>
			)}
			<div className="header-timer">
				<div>{isPlaying && elapsedTime.toFixed(2)}</div>
			</div>
			<div className="header-titles">
				<h1>Draw &amp; Guess</h1>
				<h4>{props.subtitle}</h4>
			</div>
		</div>
	);
};

export default Header;
