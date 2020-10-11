import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import Editor from "./Editor";

import { addPost } from "../db";

const NewPost = () => {
	const [showEditor, setShowEditor] = useState(false);
	const [postBody, setPostBody] = useState("");
	const [showNext, setShowNext] = useState(false);
	const [title, setTitle] = useState("");
	const [topic, setTopic] = useState("");

	const user = JSON.parse(window.localStorage.getItem("UserDetails"));

	const onClickHandler = (e) => {
		e.preventDefault();
		setShowEditor(true);
	};

	const onTitleChangeHandler = (e) => {
		setTitle(e.target.value.trim());

		// if (title != "" && topic != "") setShowNext(true);
		// if (e.target.value.trim() == "") setShowNext(false);
	};

	const onTopicChangeHandler = (e) => {
		setTopic(e.target.id);

		// if (title != "" && topic != "") setShowNext(true);
	};

	setInterval(() => {
		if (title != "" && topic != "") setShowNext(true);
		else setShowNext(false);
	}, 100);

	const onPostSubmit = () => {
		addPost(user.email, user.name, title, topic, postBody);
	};

	const initial = () => {
		return (
			<form className="ui form">
				<div className="field required" onChange={onTitleChangeHandler}>
					<label>Title</label>
					<input
						type="text"
						name="postTitle"
						placeholder="Enter Post Title"
						autoComplete="off"
					/>
				</div>
				<div
					onChange={onTopicChangeHandler}
					className="grouped fields required"
				>
					<label>Select a Topic</label>
					<div className="field">
						<div className="ui radio checkbox">
							<input type="radio" id="JavaScript" name="topic" />
							<label>JavaScript</label>
						</div>
					</div>
					<div className="field">
						<div className="ui radio checkbox">
							<input type="radio" id="C++" name="topic" />
							<label>C++</label>
						</div>
					</div>
					<div className="field">
						<div className="ui radio checkbox">
							<input
								type="radio"
								id="About this Project"
								name="topic"
							/>
							<label>About this Project</label>
						</div>
					</div>
					<div className="field">
						<div className="ui radio checkbox">
							<input type="radio" id="Other" name="topic" />
							<label>Other</label>
						</div>
					</div>
				</div>
				<button
					onClick={onClickHandler}
					className={`ui primary button ${
						showNext ? "" : "disabled"
					}`}
				>
					Next
				</button>
			</form>
		);
	};

	return showEditor ? (
		<Editor setPostBody={setPostBody} onPostSubmit={onPostSubmit} />
	) : (
		initial()
	);
};

export default NewPost;
