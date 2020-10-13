import { auth } from "firebase";
import React from "react";
import dayjs from "dayjs";

const PostHeader = ({ author, title, datePosted }) => {
	return (
		<div className="ui unstackable items" id="postHeader">
			<div className="item">
				<div className="ui tiny circular image">
					<img src={author.pic} />
				</div>
				<div className="content">
					<div className="header">{title}</div>
					<div className="meta">
						<div className="By">Author: {author.name}</div>
						<div>
							Posted On :{" "}
							{dayjs(datePosted).format("ddd, D MMM YYYY")}
						</div>
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
