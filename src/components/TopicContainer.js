import React from "react";

import PostTitle from "./PostTitle";

const TopicContainer = (props) => {
	if (props.titles.length == 0) return null;

	return (
		<React.Fragment>
			<div className="ui top attached tabular menu">
				<div className="active item">{props.topic}</div>
			</div>
			<div className="ui bottom attached active tab segment">
				{props.titles.map((eachTitle) => {
					return (
						<PostTitle
							id={eachTitle.postid}
							key={eachTitle.postid}
							postTitle={eachTitle.title}
							pic={eachTitle.pic}
						/>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export default TopicContainer;
