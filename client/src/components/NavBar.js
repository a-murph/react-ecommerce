import React, {Component} from "react";
import {Link} from "react-router-dom";

class NavBar extends Component {
	render() {
		return (
			<nav className="menu-bar">
				<div className="nav-menu-button"><i class="fas fa-bars"></i></div>
				<div className="nav-home-logo"><Link to="/"><img alt="" className="logo-nav" src="/img/logo3.svg"/></Link></div>
				<div className="nav-search-bar">
					<div className="nav-search-filter-button"><span className="nav-font-dark">All</span><i className="fas fa-sort-down refine-icon"></i></div>
					<div className="nav-search-text-input"></div>
					<div className="nav-search-submit-button"><i className="fas fa-search"></i></div>
				</div>
				<div className="nav-language-dropdown"><span className="nav-title-font">EN</span><i className="fas fa-globe-americas nav-icon"></i></div>
				<div className="nav-div-bar"></div>
				<div className="nav-account-dropdown"><span className="nav-title-font">Account & Lists</span><i className="fas fa-sort-down nav-icon"></i></div>
				<div className="nav-orders-dropdown"><span className="nav-title-font">Orders</span><i className="fas fa-sort-down nav-icon"></i></div>
				<div className="nav-cart-button"><img alt="" className="img" src="/img/shopping-cart-solid.svg"/><span className="nav-title-font">Cart</span></div>
			</nav>
		);
	};
};

export default NavBar;