import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const Header = (props) => {
	const [activeTab, setActiveTab] = useState(window.location.pathname);

	const onAuthSuccess = (response) => {
		props.setUserDetails({
			email: response.profileObj.email,
			name: response.profileObj.name,
			pic: response.profileObj.imageUrl,
		});
	};

	const onClickHandler = (e) => {
		setActiveTab(window.location.pathname);
	};

	return (
		<React.Fragment>
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
					className={`item ${
						activeTab == "/contact" ? "active" : ""
					}`}
					data-tab="Contact"
				>
					Contact
				</Link>
			</div>
			<GoogleLogin
				clientId="1026934796505-ab6l8plame1lfi60rqo5n66ci9sist8s.apps.googleusercontent.com"
				render={(renderProps) => (
					<button
						className="ui right floated button"
						onClick={renderProps.onClick}
						disabled={renderProps.disabled}
					>
						Sign In with Google
					</button>
				)}
				buttonText="Login"
				onSuccess={onAuthSuccess}
				cookiePolicy={"single_host_origin"}
			/>
		</React.Fragment>
	);
};

export default Header;
