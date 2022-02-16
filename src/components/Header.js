import React from "react";
import { useSelector } from "react-redux";

const Header = (props) => {
	const [username, totalPoints] = useSelector((state) => {
		return [state.users.username, state.game.totalPoints];
	});

	return (
		<div className="App-header">
			<div className="header-username">{username}</div>
			{username && (
				<div className="header-username" id="points">
					total point -{totalPoints}
				</div>
			)}
			<div className="header-titles">
				<h1>Draw &amp; Guess</h1>
				<h4>{props.subtitle}</h4>
			</div>
		</div>
	);
};

export default Header;
