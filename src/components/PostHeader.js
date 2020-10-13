import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const PostHeader = ({ author, title, datePosted, topic }) => {
	return (
		<div className="ui divided items">
			<div className="item">
				<div className="ui circular image">
					<Link to={"/member/" + author.email}>
						<img src={author.pic} />
					</Link>
				</div>
				<div className="content">
					<span className="header">{title}</span>
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
