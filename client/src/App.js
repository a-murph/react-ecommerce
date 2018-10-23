import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import "./css/index.css"

const App = () => (
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/search" component={Search} />
		</div>
	</Router>
);

export default App;
