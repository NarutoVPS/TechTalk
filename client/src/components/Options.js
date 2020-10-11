import React from "react";
import { Link } from "react-router-dom";

const Options = ({ showReply, isLoggedIn }) => {
	let isSignedIn = null;

	try {
		if (window.gapi.auth2.getAuthInstance().isSignedIn.get())
			isSignedIn = true;
		else isSignedIn = false;
	} catch {
		isSignedIn = false;
	}

	const showWarning = () => {
		if (!isSignedIn) {
			return (
				<div className="ui warning message">
					<p>Please Sign In to Create or Reply Post</p>
				</div>
			);
		}

		return null;
	};

	if (!showReply) {
		return (
			<React.Fragment>
				{showWarning()}
				<Link
					to="/new"
					className={`ui right floated green button ${
						isSignedIn ? "" : "disabled"
					}`}
				>
					Create a Post
				</Link>
			</React.Fragment>
		);
	}

	return (
		<div>
			{showWarning()}
			<span
				className={`ui right floated primary button ${
					isSignedIn ? "" : "disabled"
				}`}
			>
				Reply
			</span>
			<Link
				to="/new"
				className={`ui right floated green button ${
					isSignedIn ? "" : "disabled"
				}`}
			>
				Create a Post
			</Link>
		</div>
	);
};

export default Options;
