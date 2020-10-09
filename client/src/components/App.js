import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";

import Header from "./Header";
import Footer from "./Footer";
import TopicContainer from "./TopicContainer";
import Post from "./Post";
import About from "./About";

import { getTitles } from "../db";

function App() {
	const [titles, setTitles] = useState([]);
	const [isSignedIn, setIsSignedIn] = useState(null);

	useEffect(() => {
		getTitles().then((res) => setTitles(res));
	}, []);

	const responseGoogle = (response) => {
		console.log(response.profileObj);
	};

	return (
		<div className="ui container">
			<BrowserRouter>
				<Header />
				<GoogleLogin
					clientId="1026934796505-ab6l8plame1lfi60rqo5n66ci9sist8s.apps.googleusercontent.com"
					render={(renderProps) => (
						<button
							className="ui button"
							onClick={renderProps.onClick}
							disabled={renderProps.disabled}
						>
							Sign In with Google
						</button>
					)}
					buttonText="Login"
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					cookiePolicy={"single_host_origin"}
				/>
				<Route
					path="/"
					exact
					// component={() => <TopicContainer topic="JavaScript" />}
					render={(props) => (
						<React.Fragment>
							<TopicContainer
								{...props}
								topic="JavaScript"
								titles={titles.filter(
									(each) => each.topic == "JavaScript"
								)}
							/>
							<TopicContainer
								{...props}
								topic="C++"
								titles={titles.filter(
									(each) => each.topic == "C++"
								)}
							/>
						</React.Fragment>
					)}
				/>
				<Route path="/post" component={Post} />
				<Route path="/about" component={About} />
			</BrowserRouter>
			<Footer />
			<br />

			<br />
			<GoogleLogout
				clientId="1026934796505-ab6l8plame1lfi60rqo5n66ci9sist8s.apps.googleusercontent.com"
				render={(renderProps) => (
					<button
						className="ui button"
						onClick={renderProps.onClick}
						disabled={renderProps.disabled}
					>
						Sign Out
					</button>
				)}
				buttonText="Logout"
			></GoogleLogout>
		</div>
	);
}

export default App;
