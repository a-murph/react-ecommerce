import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Product from "./pages/Product";
import "./css/index.css"

const App = () => (
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/search" component={Search} />
			<Route path="/product" component={Product} />
		</div>
	</Router>
);

export default App;
