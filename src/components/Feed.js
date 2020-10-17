import React from "react";
import htmlParser from "react-html-parser";
import { Link } from "react-router-dom";

import ReplyBtn from "./ReplyBtn";

const Feed = ({ postId, replys = [] }) => {
	if (replys.length == 0) return null;
	let replyIndex = -1;

	return (
		<div className="ui feed">
			{replys.map((reply) => {
				if (reply.isCommentReply) {
					const index = reply.replyIndex;
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
								</Link>

								<span>
									<ReplyBtn
										index={++replyIndex}
										postId={postId}
									/>
								</span>
								<div className="extra text">
									{htmlParser(reply.body)}
								</div>

								<div className="repliedTo">
									<div className="content">
										<Link to={"/member/" + reply.email}>
											<span className="summary">
												<a>{replys[index].name}</a>
											</span>
										</Link>

										<div className="extra text">
											{htmlParser(replys[index].body)}
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}
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
							</Link>

							<span>
								<ReplyBtn
									index={++replyIndex}
									postId={postId}
								/>
							</span>

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
