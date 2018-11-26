import React, {Component} from "react";
import {Redirect} from "react-router-dom"

class SearchBar extends Component {
	state = {
		searchTerm: "",
		redirect: false
	};

	handleSearchInput = event => {
		this.setState({
			searchTerm: event.target.value
		});
	};

	handleSearch = () => {
		this.setState({
			redirect: true
		});
	};

	render() {
		if (this.state.redirect)
			return <Redirect to={`/search?s=${this.state.searchTerm}`} />

		return (
			<div className="home-nav-search-bar">
				<div className="home-nav-search-filter-button">
					<span className="nav-font-dark">All <i className="fas fa-sort-down"></i></span>
				</div>
				<input type="text" className="home-nav-search-text-input" onChange={this.handleSearchInput} onKeyPress={event => { if (event.key && event.key === "Enter") this.handleSearch() }}></input>
				<div className="home-nav-search-submit-button"><input type="submit" className="icon" value="" onClick={this.handleSearch}></input><i className="fas fa-search icon"></i></div>
			</div>
		);
	};
};

export default SearchBar;