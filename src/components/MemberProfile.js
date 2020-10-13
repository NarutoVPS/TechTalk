import React, { useState, useEffect } from "react";

import { getMemberProfile } from "../db";

const MemberProfile = (props) => {
	const [memberProfile, setMemberProfile] = useState({});

	useEffect(() => {
		getMemberProfile(props.match.params.email)
			.then((res) => setMemberProfile(res))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="ui card">
			<div className="image">
				<img src={memberProfile.pic} />
			</div>
			<div className="content">
				<a className="header">{memberProfile.name}</a>
				<div className="meta">
					<span className="date">Joined in 2013</span>
				</div>
				<div className="description">
					Kristy is an art director living in New York.
				</div>
			</div>
			<div className="extra content">
				<a>
					<i className="user icon"></i>
					22 Posts
				</a>
			</div>
		</div>
	);
};

export default MemberProfile;
