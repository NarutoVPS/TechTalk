import React from "react";

const PostHeader = (props) => {
	return (
		<div className="ui unstackable items">
			<div className="item">
				<div className="ui mini circular image">
					<img src="https://semantic-ui.com/images/wireframe/image.png" />
				</div>
				<div className="content">
					<div className="header">{props.title}</div>
					<div className="meta">
						<span className="By ">Author: {props.author}</span>
					</div>
					<div className="description">
						<p></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostHeader;
