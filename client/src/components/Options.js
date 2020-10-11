import React from "react";
import { Link } from "react-router-dom";

const Options = ({ showReply, isLoggedIn }) => {
	if (!showReply) {
		return (
			<Link
				to="/new"
				className={`ui right floated green button ${
					window.gapi.auth2.getAuthInstance().isSignedIn.get()
						? ""
						: "disabled"
				}`}
			>
				Create a Post
			</Link>
		);
	}

	return (
		<div>
			<span
				className={`ui right floated primary button ${
					window.gapi.auth2.getAuthInstance().isSignedIn.get()
						? ""
						: "disabled"
				}`}
			>
				Reply
			</span>
			<Link
				to="/new"
				className={`ui right floated green button ${
					window.gapi.auth2.getAuthInstance().isSignedIn.get()
						? ""
						: "disabled"
				}`}
			>
				Create a Post
			</Link>
		</div>
	);
};

export default Options;
