import React from "react";
import htmlParser from "react-html-parser";

const Feed = ({ postId, replys = [] }) => {
	return (
		<div className="ui feed">
			{replys.map((reply) => {
				return (
					<div className="event">
						<div className="label">
							<img src={reply.pic} />
						</div>
						<div className="content">
							<div className="summary">
								<a>{reply.name}</a>
								{/* <div className="date">3 days ago</div> */}
							</div>
							<div className="extra text">
								{htmlParser(reply.body)}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Feed;
