import React from "react";

import PostTitle from "./PostTitle";

const TopicContainer = (props) => {
	const onClickHandler = (e) => {
		e.preventDefault();
		console.log("clicked");
	};

	return (
		<React.Fragment>
			<div className="ui top attached tabular menu">
				<div className="active item">{props.topic}</div>
			</div>
			<div className="ui bottom attached active tab segment">
				{props.titles.map((title) => (
					<PostTitle
						key={title}
						onClick={onClickHandler}
						postTitle={title}
					/>
				))}
			</div>
		</React.Fragment>
	);
};

export default TopicContainer;
