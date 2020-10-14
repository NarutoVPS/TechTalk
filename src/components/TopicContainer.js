import React from "react";

import PostTitle from "./PostTitle";

const TopicContainer = (props) => {
	if (props.titles.length == 0) return null;

	return (
		<React.Fragment>
			<div className="ui segments">
			<div className="ui segment">
				<p>{props.topic}</p>
			</div>
			<div className="ui secondary segment">
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
			</div>

		</React.Fragment>
	);
};

export default TopicContainer;
