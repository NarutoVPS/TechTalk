import React from "react";

const Interact = () => {
	return (
		<div className="ui ignored icon direction buttons right floated">
			<div
				className="ui button"
				data-animation="flip"
				data-direction="left"
				title="Flip Left"
			>
				<i className="left long arrow icon"></i>
			</div>
		</div>
	);
};

export default Interact;
