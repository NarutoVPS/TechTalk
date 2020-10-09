import React from "react";
import { Link } from "react-router-dom";

const PostTitle = (props) => {
	return (
		<Link to={`/post/${props.id}`}>
			<div className="ui unstackable divided items">
				<div className="item">
					<div className="ui tiny circular image">
						<img src="https://semantic-ui.com/images/wireframe/image.png" />
					</div>
					<div className="middle aligned content">
						{props.postTitle}
					</div>
				</div>
			</div>
			<hr />
		</Link>
	);
};

export default PostTitle;
