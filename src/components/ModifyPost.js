import React from "react";
import swal from "sweetalert";

import { delPost } from "../db";

const ModifyPost = ({ postId }) => {
	const onDelBtnClick = () => {
		swal({
			title: "Are you sure?",
			text: "Once deleted, post can't be recovered!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				delPost(postId).then(() => {
					swal("Poof! Your imaginary file has been deleted!", {
						icon: "success",
					});
				});
			} else {
				swal("Your post is safe!");
			}
		});
	};

	return (
		<span className="ui ignored icon direction buttons right floated">
			<div
				onClick={onDelBtnClick}
				className="ui button"
				data-animation="flip"
			>
				<img className="icon" src="./delete.svg" />
			</div>
		</span>
	);
};

export default ModifyPost;
