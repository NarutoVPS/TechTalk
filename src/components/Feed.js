import React from "react";
import htmlParser from "react-html-parser";
import { Link } from "react-router-dom";

import Interact from "./interact";

const Feed = ({ postId, replys = [] }) => {
	if (replys.length == 0) return null;

	return (
		<div className="ui feed">
			{replys.map((reply) => {
				return (
					<div className="event">
						<div className="label">
							<Link to={"/member/" + reply.email}>
								<img src={reply.pic} />
							</Link>
						</div>
						<div className="content">
							<Link to={"/member/" + reply.email}>
								<span className="summary">
									<a>{reply.name}</a>
								</span>
								<span>
									<Interact />
								</span>
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
