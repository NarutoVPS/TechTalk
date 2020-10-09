import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [activeTab, setActiveTab] = useState(window.location.pathname);

	const onClickHandler = (e) => {
		setActiveTab(window.location.pathname);
	};

	return (
		<div
			onClick={onClickHandler}
			className="ui three item unstackable tabs menu"
		>
			<Link
				to="/"
				className={`item ${activeTab == "/" ? "active" : ""}`}
				data-tab="Home"
			>
				Home
			</Link>
			<Link
				to="/about"
				className={`item ${activeTab == "/about" ? "active" : ""}`}
				data-tab="About"
			>
				About
			</Link>
			<Link
				to="/contact"
				className={`item ${activeTab == "/contact" ? "active" : ""}`}
				data-tab="Contact"
			>
				Contact
			</Link>
		</div>
	);
};

export default Header;
