import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import TopicContainer from "./TopicContainer";
import Post from "./Post";
import Info from "./Info";
import Options from "./Options";
import ReplyEditor from "./ReplyEditor";
import MemberProfile from "./MemberProfile";

import { getTitles } from "../db";
import NewPost from "./NewPost";

function App() {
	const [titles, setTitles] = useState([]);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userDetails, setUserDetails] = useState({});

	// const topics = [
	// 	"Web Development",
	// 	"Programming",
	// 	"Machine Learning / AI",
	// 	"About this Project (Query / Feedback)",
	// 	"Other",
	// ];

	useEffect(() => {
		getTitles().then((res) => setTitles(res));
	}, []);

	const onLoadHandler = () => {
		setTimeout(() => {
			setIsLoggedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
		}, 2000);
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
							<Options
								showReply={false}
								isLoggedIn={isLoggedIn}
							/>
							<TopicContainer
								{...props}
								key={titles.author}
								topic="About This Project"
								titles={titles.filter(
									(title) =>
										title.topic == "About This Project"
								)}
							/>
							<TopicContainer
								{...props}
								key={titles.author}
								topic="Recent Posts"
								titles={titles.filter(
									(title) =>
										title.topic != "About This Project"
								)}
							/>
						</React.Fragment>
					)}
				/>
				<Route path="/post/:id" component={Post} />
				<Route path="/info" component={Info} />
				<Route path="/new" component={NewPost} />
				<Route path="/reply/:id" exact component={ReplyEditor} />
				<Route
					path="/reply/:id/:replyIndex"
					exact
					component={ReplyEditor}
				/>
				<Route path="/member/:email" component={MemberProfile} />
			</BrowserRouter>
			{/* <Footer /> */}
			<br />
		</div>
	);
}

export default App;
