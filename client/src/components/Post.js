import React, { useState, useEffect } from "react";

import PostHeader from "./PostHeader";
import Feed from "./Feed";
import Options from "./Options";

import { getPost } from "../db";

const Post = (props) => {
	const [post, setPost] = useState({});

	useEffect(() => {
		getPost(props.match.params.id).then((res) => setPost(res));
	}, []);

	return (
		<React.Fragment>
			<Options showReply={true} />
			<br />
			<br />
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
