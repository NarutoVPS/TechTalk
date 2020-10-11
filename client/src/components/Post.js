import React, { useState, useEffect } from "react";
import htmlParser from "react-html-parser";

import PostHeader from "./PostHeader";
import Feed from "./Feed";
import Options from "./Options";

import { getPost, getAuthor } from "../db";

const Post = (props) => {
	const [post, setPost] = useState({});
	const [author, setAuthor] = useState({});

	useEffect(() => {
		getPost(props.match.params.id).then((res) => {
			setPost(res);
			getAuthor(res.authorId).then((res) => setAuthor(res));
		});
	}, []);

	return (
		<React.Fragment>
			<Options showReply={true} />
			<br />
			<br />
			<div className="ui segment">
				<PostHeader title={post.title} author={author} />
				<p>{htmlParser(post.body)}</p>
			</div>
			<div className="ui segment">
				<Feed />
			</div>
		</React.Fragment>
	);
};

export default Post;
