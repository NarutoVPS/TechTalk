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
		props.setIsLoggedIn(true);
	};

	const onLogOutSuccess = (response) => {
		props.setIsLoggedIn(false);
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
			<div onClick={onClickHandler} class="ui top fixed menu">
				<div class="item">
					<img src="https://semantic-ui.com/images/logo.png" />
				</div>
				<Link
					to="/"
					className={`item ${activeTab == "/" ? "active" : ""}`}
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
				<div className="item right floated">
					{displaySignInStatus()}
				</div>
			</div>
			<br />
			<br />
			<br />
		</React.Fragment>
	);
};

export default Header;
