import React from "react";

const Options = ({ showReply }) => {
	if (!showReply) {
		return (
			<span className="ui right floated green button">Create a Post</span>
		);
	}

	return (
		<React.Fragment>
			<span className="ui right floated primary button">Reply</span>
			<span className="ui right floated green button">Create a Post</span>
		</React.Fragment>
	);
};

export default Options;
