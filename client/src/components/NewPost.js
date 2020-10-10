import React from "react";

const NewPost = () => {
	return (
		<form className="ui form">
			<div className="field">
				<label>Title</label>
				<input
					type="text"
					name="postTitle"
					placeholder="Enter Post Title"
				/>
			</div>
			<div className="grouped fields">
				<label>Select a Topic</label>
				<div className="field">
					<div className="ui radio checkbox">
						<input type="radio" name="topic" />
						<label>JavaScript</label>
					</div>
				</div>
				<div className="field">
					<div className="ui radio checkbox">
						<input type="radio" name="topic" />
						<label>C++</label>
					</div>
				</div>
				<div className="field">
					<div className="ui radio checkbox">
						<input type="radio" name="topic" />
						<label>About this Project</label>
					</div>
				</div>
				<div className="field">
					<div className="ui radio checkbox">
						<input type="radio" name="topic" />
						<label>Other</label>
					</div>
				</div>
			</div>
			<button class="ui primary button" type="submit">
				Submit
			</button>
		</form>
	);
};

export default NewPost;
