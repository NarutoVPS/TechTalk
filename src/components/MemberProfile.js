import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

import TopicContainer from "./TopicContainer";

import { getMemberProfile, getMemberPosts } from "../db";
import { parseImgUrl } from "../utils";

const MemberProfile = (props) => {
	const [memberProfile, setMemberProfile] = useState({});
	const [memberPosts, setMemberPosts] = useState([]);

	useEffect(() => {
		getMemberProfile(props.match.params.email)
			.then((res) => setMemberProfile(res))
			.catch((err) => console.log(err));

		getMemberPosts(props.match.params.email)
			.then((res) => setMemberPosts(res))
			.catch((err) => console.log(err));
	}, []);

	return (
		<React.Fragment>
			<div className="ui centered card">
				<div className="image">
					<img src={parseImgUrl(memberProfile.pic)} />
				</div>
				<div className="content">
					<span className="header">{memberProfile.name}</span>
					<div className="meta">
						<span className="date">
							Joined in{" "}
							{dayjs(memberProfile.joined).format(
								"ddd, D MMM YYYY"
							)}
						</span>
					</div>
				</div>
				<div className="extra content">
					<span>
						{/* <i className="user icon"></i> */}
						{`${memberPosts.length} Posts`}
					</span>
				</div>
			</div>
			<TopicContainer
				{...props}
				topic="Posts by the User"
				titles={memberPosts}
			/>
		</React.Fragment>
	);
};

export default MemberProfile;
