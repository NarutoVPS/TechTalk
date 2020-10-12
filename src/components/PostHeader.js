import { auth } from "firebase";
import React from "react";

const PostHeader = ({ author, title }) => {
	return (
		<div className="ui unstackable items">
			<div className="item">
				<div className="ui mini image">
					<img src={author.pic} />
				</div>
				<div className="content">
					<div className="header">{title}</div>
					<div className="meta">
						<span className="By ">Author: {author.name}</span>
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
