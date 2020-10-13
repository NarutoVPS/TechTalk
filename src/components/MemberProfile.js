import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

import { getMemberProfile } from "../db";

const MemberProfile = (props) => {
	const [memberProfile, setMemberProfile] = useState({});

	useEffect(() => {
		getMemberProfile(props.match.params.email)
			.then((res) => setMemberProfile(res))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="ui centered card">
			<div className="image">
				<img src={memberProfile.pic} />
			</div>
			<div className="content">
				<span className="header">{memberProfile.name}</span>
				<div className="meta">
					<span className="date">
						Joined in{" "}
						{dayjs(memberProfile.joined).format("ddd, D MMM YYYY")}
					</span>
				</div>
			</div>
			<div className="extra content">
				<span>
					{/* <i className="user icon"></i> */}
					22 Posts
				</span>
			</div>
		</div>
	);
};

export default MemberProfile;
