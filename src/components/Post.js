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
			<Options showReply={true} postId={props.match.params.id} />
			<br />
			<br />
			<div className="ui segment">
				<PostHeader
					title={post.title}
					author={author}
					datePosted={post.datePosted}
					topic={post.topic}
				/>
				<p>{htmlParser(post.body)}</p>
			</div>
			{post.reply ? (
				<div className="ui segment">
					<Feed postId={props.match.params.id} replys={post.reply} />
				</div>
			) : null}
		</React.Fragment>
	);
};

export default Post;
