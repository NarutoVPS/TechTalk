import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { addPost } from "../db";

const Editor = ({ setPostBody, onPostSubmit }) => {
	const [valid, setValid] = useState(false);

	const onChangeHandler = (e, editor) => {
		setPostBody(editor.getData());
		if (editor.getData() != "") setValid(true);
		else setValid(false);
	};

	return (
		<div>
			<div
				className={`ui right floated primary button ${
					valid ? "" : "disabled"
				}`}
				onClick={onPostSubmit}
			>
				Post
			</div>
			<br />
			<br />

			<CKEditor editor={ClassicEditor} onChange={onChangeHandler} />
		</div>
	);
};

export default Editor;
