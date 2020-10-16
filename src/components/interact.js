import React from "react";

const Interact = () => {
	return (
		<div class="ui ignored icon direction buttons right floated">
			<div
				class="ui button"
				data-animation="flip"
				data-direction="left"
				title="Flip Left"
			>
				<i class="left long arrow icon"></i>
			</div>
			<div
				class="ui button"
				data-animation="flip"
				data-direction="up"
				title="Flip Up"
			>
				<i class="up long arrow icon"></i>
			</div>
			<div
				class="ui icon button"
				data-animation="flip"
				data-direction="down"
				title="Flip Down"
			>
				<i class="down long arrow icon"></i>
			</div>
			<div
				class="ui icon button"
				data-animation="flip"
				data-direction="right"
				title="Flip Right"
			>
				<i class="right long arrow icon"></i>
			</div>
		</div>
	);
};

export default Interact;
