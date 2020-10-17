import React from "react";
import { Link } from "react-router-dom";

const ReplyBtn = ({ index, postId }) => {
	if (window.localStorage.getItem("UserDetails") == "null") return null;

	return (
		<div className="ui ignored icon direction buttons right floated">
			<Link to={`/reply/${postId}/${index}`}>
				<div className="ui button" data-animation="flip">
					<img className="icon" src="./reply.svg" />
				</div>
			</Link>
		</div>
	);
};

export default ReplyBtn;
