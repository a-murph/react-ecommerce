import React, {Component} from "react";
import {Link} from "react-router-dom";

class NavBar extends Component {
	render() {
		return (
			<nav className="menu-bar">
				<div className="nav-location-button"></div>
				<div className="nav-home-logo"><Link to="/"><img alt="" className="logo-nav" src="/img/logo3.svg"/></Link></div>
				<div className="nav-search-bar">
					<div className="nav-search-filter-button"></div>
					<div className="nav-search-text-input"></div>
					<div className="nav-search-submit-button"></div>
				</div>
				<div className="nav-language-dropdown"> </div>
				<div className="nav-div-bar"></div>
				<div className="nav-account-dropdown"> </div>
				<div className="nav-orders-dropdown"> </div>
				<div className="nav-cart-button"> </div>
			</nav>
		);
	};
};

export default NavBar;