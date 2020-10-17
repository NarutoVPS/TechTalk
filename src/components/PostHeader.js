import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

import ModifyPost from "./ModifyPost";

const PostHeader = ({ author, title, datePosted, topic, postId }) => {
	const showAuthorControls = () => {
		if (window.localStorage.getItem("UserDetails") == "null") return null;
		if (
			JSON.parse(window.localStorage.getItem("UserDetails")).email ==
			author.email
		)
			return <ModifyPost postId={postId} />;
		return null;
	};
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
						<span className="ui label">{topic}</span>
						{showAuthorControls()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostHeader;
