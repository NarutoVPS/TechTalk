import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import TopicContainer from "./TopicContainer";

function App() {
	return (
		<div className="ui container">
			<Header />
			<BrowserRouter>
				<Route
					path="/"
					exact
					// component={() => <TopicContainer topic="JavaScript" />}
					render={(props) => (
						<TopicContainer {...props} topic="JavaScript" />
					)}
				/>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
