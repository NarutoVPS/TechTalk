import React, { useState } from "react";
import { Link } from "react-router-dom";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = ({ setPostBody, onPostSubmit }) => {
	const [valid, setValid] = useState(false);

	const onChangeHandler = (e, editor) => {
		setPostBody(editor.getData());
		if (editor.getData() != "") setValid(true);
		else setValid(false);
	};

	return (
		<div>
			<div onClick={onPostSubmit}>
				<Link
					to="/"
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

export default Editor;
