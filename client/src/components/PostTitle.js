import React from "react";
import { Link } from "react-router-dom";

const PostTitle = (props) => {
	return (
		<Link to={`/post/${props.id}`}>
			<div className="ui unstackable divided items">
				<div className="item">
					<div className="ui tiny circular image">
						<img src={props.pic} />
					</div>
					<div className="middle aligned content">
						<h3>{props.postTitle}</h3>
					</div>
				</div>
			</div>
			<hr />
		</Link>
	);
};

export default PostTitle;
