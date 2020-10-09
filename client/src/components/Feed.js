import React from "react";

const Feed = () => {
	return (
		<div class="ui feed">
			<div class="event">
				<div class="label">
					<img src="https://semantic-ui.com/images/avatar/small/elliot.jpg" />
				</div>
				<div class="content">
					<div class="summary">
						<a class="user">Elliot Fu</a> added you as a friend
						<div class="date">1 Hour Ago</div>
					</div>
					<div class="meta">
						<a class="like">
							<i class="like icon"></i> 4 Likes
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feed;
