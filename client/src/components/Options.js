import React from "react";
import { Link } from "react-router-dom";

const Options = ({ showReply, isLoggedIn }) => {
	const checkAccess = () => {
		if (!isLoggedIn) alert("Please Log In");
	};

	if (!showReply) {
		return (
			<Link to="/new" className="ui right floated green button">
				Create a Post
			</Link>
		);
	}

	return (
		<div onCLick={checkAccess}>
			<span className="ui right floated primary button">Reply</span>
			<Link to="/new" className="ui right floated green button">
				Create a Post
			</Link>
		</div>
	);
};

export default Options;
