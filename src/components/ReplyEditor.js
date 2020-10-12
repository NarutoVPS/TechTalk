import React, { useState } from "react";
import { Link } from "react-router-dom";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { addReply } from "../db";

const ReplyEditor = (props) => {
	const [valid, setValid] = useState(false);
	const [replyBody, setReplyBody] = useState("");

	const replyDetails = JSON.parse(window.localStorage.getItem("UserDetails"));

	const onChangeHandler = (e, editor) => {
		setReplyBody(editor.getData());
		if (editor.getData() != "") setValid(true);
		else setValid(false);
	};

	const onReplySubmit = () => {
		replyDetails.body = replyBody;
		addReply(props.match.params.id, replyDetails).then((res) =>
			console.log("Added")
		);
	};

	return (
		<div>
			<div onClick={onReplySubmit}>
				<Link
					to={"/post/" + props.match.params.id}
					className={`ui right floated primary button ${
						valid ? "" : "disabled"
					}`}
				>
					Post
				</Link>
			</div>
			<br />
			<br />

			<CKEditor editor={ClassicEditor} onChange={onChangeHandler} />
		</div>
	);
};

export default ReplyEditor;
