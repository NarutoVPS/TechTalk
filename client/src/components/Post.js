import React, { useState, useEffect } from "react";

import PostHeader from "./PostHeader";

import { getPost } from "../db";

const Post = (props) => {
	const [post, setPost] = useState({});

	let url = window.location.href;
	const postTd = url.substring(url.length - 20, url.length);

	useEffect(() => {
		getPost(postTd).then((res) => setPost(res));
	}, []);

	return (
		<div className="ui segment">
			<PostHeader title={post.title} author={post.author} />
			<p>{post.body}</p>
		</div>
	);
};

export default Post;
