import React from "react";

import PostTitle from "./PostTitle";

const TopicContainer = (props) => {
	return (
		<React.Fragment>
			<div className="ui top attached tabular menu">
				<div className="active item">{props.topic}</div>
			</div>
			<div className="ui bottom attached active tab segment">
				<PostTitle postTitle="This is a Post" />
				<PostTitle postTitle="This is a also a Post" />
				<PostTitle postTitle="You guessed it, a POST!" />
			</div>
		</React.Fragment>
	);
};

export default TopicContainer;
