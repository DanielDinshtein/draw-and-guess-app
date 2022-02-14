import React from "react";
import { useSelector } from "react-redux";

const Header = (props) => {
	const username = useSelector((state) => state.users.username);

	return (
		<div className="App-header">
			<div className="header-username">{username}</div>
			<div className="header-titles">
				<h1>Draw &amp; Guess</h1>
				<h4>{props.subtitle}</h4>
			</div>
		</div>
	);
};

export default Header;
