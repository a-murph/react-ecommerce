import React, {Component} from "react";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";

class NavBar extends Component {
	render() {
		return (
			<nav className="menu-bar">
				<div className="nav-menu-button pointer"><i className="fas fa-bars"></i></div>
				<div className="nav-home-logo"><Link to="/"><img alt="" className="logo-nav" src="/img/logo3.svg"/></Link></div>
				<SearchBar search={this.props.search} />
				<div className="nav-language-dropdown pointer"><span className="nav-title-font">EN</span><i className="fas fa-globe-americas nav-icon"></i></div>
				<div className="nav-div-bar"></div>
				<Dropdown title="Account & Lists" list={["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]} />
				<Dropdown title="Orders" list={["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]} />
				<div className="nav-cart-button pointer"><img alt="" className="img" src="/img/shopping-cart-solid.svg"/><span className="nav-title-font">Cart</span></div>
			</nav>
		);
	};
};

export default NavBar;