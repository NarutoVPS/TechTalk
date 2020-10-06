import React from "react";

import PostHeader from "./PostHeader";

const TopicContainer = (props) => {
	return (
		<React.Fragment>
			<div className="ui top attached tabular menu">
				<div className="active item">{props.topic}</div>
			</div>
			<div className="ui bottom attached active tab segment">
				<PostHeader postTitle="This is a Post" />
				<PostHeader postTitle="This is a also a Post" />
				<PostHeader postTitle="You guessed it, a POST!" />
			</div>
		</React.Fragment>
	);
};

export default TopicContainer;
