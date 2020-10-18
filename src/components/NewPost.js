import React, { useState } from "react";

import dayjs from "dayjs";
import Editor from "./Editor";
import swal from "sweetalert";

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

		if (title != "" && topic != "") setShowNext(true);
		if (e.target.value.trim() == "") setShowNext(false);
	};

	const onTopicChangeHandler = (e) => {
		setTopic(e.target.value.trim());

		if (title != "" && topic != "") setShowNext(true);
		if (e.target.value.trim() == "") setShowNext(false);
	};

	const onPostSubmit = () => {
		addPost(
			user.email,
			user.name,
			title,
			topic,
			postBody,
			user.pic,
			String(dayjs())
		)
			.then(() => swal("Success", "Post Created", "success"))
			.catch((err) => console.log(err));
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
				<div className="field required" onChange={onTopicChangeHandler}>
					<label>Enter Related Topic : </label>
					<input
						type="text"
						name="topic"
						placeholder="Enter a Topic"
						autoComplete="off"
						required={true}
					/>
				</div>
				<button
					onClick={onClickHandler}
					type="submit"
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
