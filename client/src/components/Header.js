import React from "react";

const Header = () => {
	return (
		<div className="ui three item unstackable tabs menu">
			<a className="item active" data-tab="Home">
				Home
			</a>
			<a className="item" data-tab="About">
				About
			</a>
			<a className="item" data-tab="Contact">
				Contact
			</a>
		</div>
	);
};

export default Header;
