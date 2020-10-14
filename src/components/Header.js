import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";

import { addMember } from "../db";

const Header = (props) => {
	const [activeTab, setActiveTab] = useState(window.location.pathname);

	const onAuthSuccess = (response) => {
		const details = {
			email: response.profileObj.email,
			name: response.profileObj.name,
			pic: response.profileObj.imageUrl,
		};

		window.localStorage.setItem("UserDetails", JSON.stringify(details));

		props.setUserDetails(details);
		props.setIsLoggedIn(true);

		addMember(details);
	};

	const onAuthFailure = (response) => {
		console.log(response);
	};

	const onLogOutSuccess = (response) => {
		props.setIsLoggedIn(false);
		window.localStorage.setItem("UserDetails", null);
		console.log("Logged Out");
	};

	const onClickHandler = (e) => {
		setActiveTab(window.location.pathname);
	};

	const displaySignInStatus = () => {
		if (!props.isLoggedIn) {
			return (
				<GoogleLogin
					clientId="1026934796505-ab6l8plame1lfi60rqo5n66ci9sist8s.apps.googleusercontent.com"
					render={(renderProps) => (
						<button
							className="ui right floated primary button"
							onClick={renderProps.onClick}
							disabled={renderProps.disabled}
						>
							Sign In with Google
						</button>
					)}
					buttonText="Login"
					onSuccess={onAuthSuccess}
					onFailure={onAuthFailure}
					cookiePolicy={"single_host_origin"}
				/>
			);
		}

		return (
			<GoogleLogout
				clientId="1026934796505-ab6l8plame1lfi60rqo5n66ci9sist8s.apps.googleusercontent.com"
				render={(renderProps) => (
					<button
						className="ui right floated red button"
						onClick={renderProps.onClick}
						disabled={renderProps.disabled}
					>
						Sign Out
					</button>
				)}
				buttonText="LogOut"
				onLogoutSuccess={onLogOutSuccess}
				cookiePolicy={"single_host_origin"}
			/>
		);
	};

	return (
		<React.Fragment>
			<div
				onClick={onClickHandler}
				className="ui top fixed menu inverted"
			>
				{/* <Link to="/">
					<div className="item">
						<img src="./icon.svg" />
					</div>
				</Link> */}
				<a
					className="item"
					href="https://github.com/NarutoVPS/TechTalk"
				>
					<img src="./github.svg" />
				</a>
				<Link
					to="/"
					className={`item ${activeTab == "/" ? "active" : ""}`}
				>
					Home
				</Link>
				{/* <Link
					to="/about"
					className={`item ${activeTab == "/about" ? "active" : ""}`}
					data-tab="About"
				>
					About
				</Link> */}
				<div className="item right floated">
					{displaySignInStatus()}
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
		</React.Fragment>
	);
};

export default Header;
