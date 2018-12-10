import React, {Component} from "react";
import Select from "./Select";

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
				<div className="home-nav-search-bar home-nav-font-dark">

					{/* <div className="home-nav-search-filter-button">
						<select onChange={this.handleSearchInput} name="dropdown" className="nav-font-dark">
							<option>All</option>
							<option>Electronics</option>
							<option>Clothing</option>
							<option>Health and Beauty</option>
							<option>Home</option>
							<option>Media</option>
						</select>
					</div> */}

					<Select handleChange={this.handleSearchInput} options={["Electronics", "Clothing", "Home", "Health and Beauty", "Media"]} default="All" />

					<input type="text" name="search-bar" className="home-nav-search-text-input" onChange={this.handleSearchInput} onKeyPress={event => { if (event.key && event.key === "Enter") this.handleSearch() }}></input>
					<div className="home-nav-search-submit-button pointer"><input type="submit" className="icon" value="" onClick={this.handleSearch}></input></div>
				</div>
			);

		return (
			<div className="nav-search-bar nav-font-dark">

				{/* <div className="dropdown">
					<select onChange={this.handleSearchInput} name="dropdown" className="nav-font-dark drop-button">
						<option className="drop-content">All</option>
						<option className="drop-content">Electronics</option>
						<option className="drop-content">Clothing</option>
						<option className="drop-content">Health and Beauty</option>
						<option className="drop-content">Home</option>
						<option className="drop-content">Media</option>
					</select>
				</div> */}

				<div className="nav-search-filter-button">
					<Select handleChange={this.handleSearchInput} options={["Electronics", "Clothing", "Home", "Health & Beauty", "Media"]} default="All" />
				</div>

				<input type="text" name="search-bar" className="nav-search-text-input" onChange={this.handleSearchInput} onKeyPress={event => { if (event.key && event.key === "Enter") this.handleSearch() }}></input>
				<input type="submit" className="nav-search-submit-button pointer" value="" onClick={this.handleSearch}></input>
				{/*<i className="fas fa-search icon"></i>*/}
			</div>
		);
	};
};

export default SearchBar;