import React from "react";
import htmlParser from "react-html-parser";
import { Link } from "react-router-dom";

const Feed = ({ postId, replys = [] }) => {
	if (replys.length == 0) return null;

	console.log(replys);

	return (
		<div className="ui feed">
			{replys.map((reply) => {
				return (
					<div className="event">
						<div className="label">
							<img src={reply.pic} />
						</div>
						<div className="content">
							<Link to={"/member/" + reply.email}>
								<div className="summary">
									<a>{reply.name}</a>
								</div>
							</Link>

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
