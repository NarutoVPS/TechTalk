import { auth } from "firebase";
import React from "react";
import dayjs from "dayjs";

const PostHeader = ({ author, title, datePosted, topic }) => {
	return (
		<div className="ui divided items">
			<div className="item">
				<div className="ui circular image">
					<img src={author.pic} />
				</div>
				<div className="content">
					<a className="header">{title}</a>
					<div className="meta">
						<span>Author: {author.name}</span>
					</div>
					<div className="meta">
						<span>
							{dayjs(datePosted).format("ddd, D MMM YYYY")}
						</span>
					</div>
					<div className="description">
						<p></p>
					</div>
					<div className="extra">
						<div className="ui label">{topic}</div>
						{/* <div className="ui label">
							<i className="globe icon"></i> Additional Languages
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostHeader;
