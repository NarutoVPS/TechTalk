import React, { useState, useEffect } from "react";

import PostHeader from "./PostHeader";
import Feed from "./Feed";

import { getPost } from "../db";

const Post = (props) => {
	const [post, setPost] = useState({});

	let url = window.location.href;
	const postTd = url.substring(url.length - 20, url.length);

	useEffect(() => {
		getPost(postTd).then((res) => setPost(res));
	}, []);

	return (
		<React.Fragment>
			<div className="ui segment">
				<PostHeader title={post.title} author={post.author} />
				<p>{post.body}</p>
			</div>
			<div className="ui segment">
				<Feed />
			</div>
		</React.Fragment>
	);
};

export default Post;
