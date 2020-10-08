import React from "react";

import PostTitle from "./PostTitle";

const TopicContainer = (props) => {
	return (
		<React.Fragment>
			<div className="ui top attached tabular menu">
				<div className="active item">{props.topic}</div>
			</div>
			<div className="ui bottom attached active tab segment">
				{props.titles.map((title) => (
					<PostTitle postTitle={title} />
				))}
			</div>
		</React.Fragment>
	);
};

export default TopicContainer;
