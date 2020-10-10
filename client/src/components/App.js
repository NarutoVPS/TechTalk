import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import TopicContainer from "./TopicContainer";
import Post from "./Post";
import About from "./About";

import { getTitles } from "../db";

function App() {
	const [titles, setTitles] = useState([]);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userDetails, setUserDetails] = useState({});

	useEffect(() => {
		getTitles().then((res) => setTitles(res));
	}, []);

	// setIsLoggedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());

	const onLoadHandler = () => {
		setIsLoggedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
	};

	return (
		<div onLoad={onLoadHandler} className="ui container">
			<BrowserRouter>
				<Header
					setUserDetails={setUserDetails}
					isLoggedIn={isLoggedIn}
					setIsLoggedIn={setIsLoggedIn}
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
				<Route path="/post/:id" component={Post} />
				<Route path="/about" component={About} />
			</BrowserRouter>
			<Footer />
			<br />
			<br />
		</div>
	);
}

export default App;
