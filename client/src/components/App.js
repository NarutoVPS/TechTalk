import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import TopicContainer from "./TopicContainer";
import Post from "./Post";

import firebase from "../firebase";

function App() {
	const [titles, setTitles] = useState([]);

	useEffect(() => {
		firebase
			.firestore()
			.collection("Titles")
			.get()
			.then((snapshot) => {
				snapshot.docs.map((doc) => {
					setTitles(doc.data().titles);
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const displayTitle = () => {
		return titles.map((title) => <p>{title}</p>);
	};

	return (
		<div className="ui container">
			<Header />
			<BrowserRouter>
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
			</BrowserRouter>
			<Footer />
			{displayTitle()}
		</div>
	);
}

export default App;
