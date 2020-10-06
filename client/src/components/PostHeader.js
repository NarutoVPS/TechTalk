import React from "react";
import { Link } from "react-router-dom";

const PostHeader = (props) => {
	return (
		<Link to="/">
			<div className="ui unstackable divided items">
				<div className="item">
					<div className="ui tiny image">
						<img src="https://semantic-ui.com/images/wireframe/image.png" />
					</div>
					<div className="middle aligned content">
						{props.postTitle}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default PostHeader;
