import React from "react";

const PostHeader = (props) => {
	return (
		<div className="ui divided items">
			<div className="item">
				<div className="ui tiny image">
					<img src="https://semantic-ui.com/images/wireframe/image.png" />
				</div>
				<div className="middle aligned content">{props.postTitle}</div>
			</div>
		</div>
	);
};

export default PostHeader;
