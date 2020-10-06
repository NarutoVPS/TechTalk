import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import TopicContainer from "./TopicContainer";

function App() {
	return (
		<div className="ui container">
			<Header />
			<TopicContainer topic="JavaScript" />
			<Footer />
		</div>
	);
}

export default App;
