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
					<div className="content">
						<span className="header">{props.postTitle}</span>
						<div className="meta">
							<span>{props.authorName}</span>
						</div>
						<div className="description">
							<p></p>
						</div>
						<div>
							<div className="ui label">{props.topic}</div>
						</div>
					</div>
				</div>
			</div>
			<hr />
		</Link>
	);
};

export default PostTitle;

// const PostTitle = (props) => {
// 	return (
// 		<Link to={`/post/${props.id}`}>
// 			<div className="ui unstackable divided items">
// 				<div className="item">
// 					<div className="ui tiny circular image">
// 						<img src={props.pic} />
// 					</div>
// 					<div className="middle aligned content">
// 						<h3>{props.postTitle}</h3>
// 					</div>
// 				</div>
// 			</div>
// 			<hr />
// 		</Link>
// 	);
// };
