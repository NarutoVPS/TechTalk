import React from "react";

const Header = () => {
	return (
		<div className="ui three item stackable tabs menu">
			<a className="item active" data-tab="Home">
				Home
			</a>
			<a className="item" data-tab="Test 2">
				Test 2
			</a>
			<a className="item" data-tab="Test 3">
				Test 3
			</a>
		</div>
	);
};

export default Header;
