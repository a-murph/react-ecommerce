import React, {Component} from "react";

class SearchBar extends Component {
	state = {
		searchTerm: "",
		category: "All",
	};

	handleSearchInput = event => {
		if (event.target.name === "search-bar") {
			this.setState({
				searchTerm: event.target.value
			});
		} else if (event.target.name === "dropdown") {
			console.log("in if")
			this.setState({
				category: event.target.value
			});
		}
	};

	handleSearch = () => {
		this.props.search(this.state.searchTerm, this.state.category);
	}

	render() {
		if (this.props.page && this.props.page === "home")
			return (
				<div className="home-nav-search-bar">
					<div className="home-nav-search-filter-button">
						<select onChange={this.handleSearchInput} name="dropdown" className="nav-font-dark">
							<option>All</option>
							<option>Electronics</option>
							<option>Clothing</option>
							<option>Health and Beauty</option>
							<option>Home</option>
							<option>Media</option>
						</select>
					</div>
					<input type="text" name="search-bar" className="home-nav-search-text-input" onChange={this.handleSearchInput} onKeyPress={event => { if (event.key && event.key === "Enter") this.handleSearch() }}></input>
					<div className="home-nav-search-submit-button"><input type="submit" className="icon" value="" onClick={this.handleSearch}></input><i className="fas fa-search icon"></i></div>
				</div>
			);

		return (
			<div className="nav-search-bar">
				<div className="nav-search-filter-button">
					<select onChange={this.handleSearchInput} name="dropdown" className="nav-font-dark">
						<option>All</option>
						<option>Electronics</option>
						<option>Clothing</option>
						<option>Health and Beauty</option>
						<option>Home</option>
						<option>Media</option>
					</select>
				</div>
				<input type="text" name="search-bar" className="nav-search-text-input" onChange={this.handleSearchInput} onKeyPress={event => { if (event.key && event.key === "Enter") this.handleSearch() }}></input>
				<div className="nav-search-submit-button"><input type="submit" className="icon" value="" onClick={this.handleSearch}></input><i className="fas fa-search icon"></i></div>
			</div>
		);
	};
};

export default SearchBar;