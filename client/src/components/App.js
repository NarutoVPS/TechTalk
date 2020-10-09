import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import TopicContainer from "./TopicContainer";
import Post from "./Post";

import { getTitles } from "../db";

function App() {
	const [titles, setTitles] = useState([]);

	useEffect(() => {
		getTitles().then((res) => setTitles(res));
	}, []);

	return (
		<div className="ui container">
			<Header />
			<BrowserRouter>
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
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
