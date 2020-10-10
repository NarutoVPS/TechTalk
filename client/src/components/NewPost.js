import React, { useState } from "react";

import Editor from "./Editor";

import { addPost } from "../db";

const NewPost = () => {
	const [showEditor, setShowEditor] = useState(false);
	const [postBody, setPostBody] = useState("");
	const [showNext, setShowNext] = useState(false);
	const [title, setTitle] = useState("");
	const [topic, setTopic] = useState("");

	const onClickHandler = (e) => {
		e.preventDefault();
		setShowEditor(true);
	};

	const onTitleChangeHandler = (e) => {
		setTitle(e.target.value);

		if (title != "" && topic != "") setShowNext(true);
		if (title == "") setShowNext(false);
	};

	const onTopicChangeHandler = (e) => {
		setTopic(e.target.id);

		if (title != "" && topic != "") setShowNext(true);
	};

	const onPostSubmit = () => {
		addPost("SP Naruto", title, topic, postBody);
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
