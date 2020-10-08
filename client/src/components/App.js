import React, { useEffect, useState } from "react";
import { MemoryRouter, Route, Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import TopicContainer from "./TopicContainer";
import Post from "./Post";

import firebase from "../firebase";
import { getTitles } from "../db";

function App() {
	const [titles, setTitles] = useState([]);

	useEffect(() => {
		getTitles().then((res) => setTitles(res));
	}, []);

	return (
		<div className="ui container">
			<Header />
			<MemoryRouter>
				<Route
					path="/"
					exact
					// component={() => <TopicContainer topic="JavaScript" />}
					render={(props) => (
						<TopicContainer
							{...props}
							topic="JavaScript"
							titles={titles}
						/>
					)}
				/>
				<Route path="/post" component={Post} />
			</MemoryRouter>
			<Footer />
		</div>
	);
}

export default App;
