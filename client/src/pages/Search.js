import React, {Component} from "react";
import API from "../utils/API"
import SearchResult from "../components/SearchResult";

class Search extends Component {
	state = {
		searchTerm: "",
		results: [],
		filteredResults: []
	};

	componentDidMount() {
		let urlParams = new URLSearchParams(window.location.search);
		let s = urlParams.get('s');

		this.setState({
			searchTerm: s
		}, () => {
			API.search(this.state.searchTerm).then(res => {
				this.setState({
					results: res.data,
					filteredResults: res.data
				}, () => {console.log(this.state.results)});
			});
		});
	};

	handleFilter = event => {
		switch (event.target.name) {
			case "price-min":
			case "price-max":
				let priceMin = document.getElementById("price-min").value || 0;
				let priceMax = document.getElementById("price-max").value || 99999;

				let priceFiltered = this.state.results.filter(product => {
					return product.price >= priceMin && product.price <= priceMax;
				});

				this.setState({
					filteredResults: priceFiltered
				});

				break;

			case "price-range":
				let rangeMin = event.target.dataset.min;
				let rangeMax = event.target.dataset.max;

				let rangeFiltered = this.state.results.filter(product => {
					return product.price >= rangeMin && product.price <= rangeMax;
				});

				this.setState({
					filteredResults: rangeFiltered
				});

				break;

			case "shipping":
				break;

			case "brand-name":
				let brandMin = event.target.dataset.min;
				let brandMax = event.target.dataset.max;

				let brandFiltered = this.state.results.filter(product => {
					return product.brand[0] >= brandMin && product.brand[0] <= brandMax;
				});

				this.setState({
					filteredResults: brandFiltered
				});

				break;

			case "customer-rating":
				let ratingMin = event.target.value;

				let ratingFiltered = this.state.results.filter(product => {
					return product.rating >= ratingMin;
				});

				this.setState({
					filteredResults: ratingFiltered
				});

				break;

			default:
				break;
		}
	};

	render() {
		return (
			<div>
				<nav className="menu-bar">
					<div className="nav-location-button"></div>
					<div className="nav-home-logo"></div>
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

				<div className="refine-results-bar">
					<div className="refine-results-count">
						{
							this.state.filteredResults.length !== 0 ?
								<span>1 - {this.state.filteredResults.length} of {this.state.filteredResults.length}</span>
							: <span>0</span>
						}
						<span> results in </span><span>All Categories: </span><span>"{this.state.searchTerm}"</span>
					</div>
					<div className="refine-results-sort-by-section">
						<span>Sort by</span>
						<div className="refine-results-drop-down"></div>
					</div>
				</div>

				<main className="search-main-section">

					<div className="refine-results-side-bar">
						<span>Show Results For</span>

						<div className="refine-results-side-bar-section">
							<span>Price</span>
							<form>
								<input onChange={this.handleFilter} type="text" id="price-min" name="price-min" placeholder="$"/><span>to</span><input onChange={this.handleFilter} type="text" id="price-max" name="price-max" placeholder="$"/><input type="submit" value="Go"/><br/>
								<input onChange={this.handleFilter} type="radio" defaultChecked name="price-range" data-min={0} data-max={99999}/><span>All Prices</span><br/>
								<input onChange={this.handleFilter} type="radio" name="price-range" data-min={0} data-max={5}/><span>$0 - $5</span><br/>
								<input onChange={this.handleFilter} type="radio" name="price-range" data-min={5} data-max={10}/><span>$5 - $10</span><br/>
								<input onChange={this.handleFilter} type="radio" name="price-range" data-min={10} data-max={15}/><span>$10 - $15</span><br/>
								<input onChange={this.handleFilter} type="radio" name="price-range" data-min={15} data-max={99999}/><span>$15+</span><br/>
							</form>
						</div>

						<div className="refine-results-side-bar-section">
							<span>Shipping</span>
							<form>
								<input type="radio" name="shipping" value="show-all" defaultChecked/> Show All<br/>
								<input type="radio" name="shipping" value="free-shipping"/> Free Shipping<br/>
								<input type="radio" name="shipping" value="same-day-shipping"/> Same Day Shipping<br/>
								<input type="radio" name="shipping" value="2-day-shipping"/> 2-Day Shipping<br/>
								<input type="radio" name="shipping" value="standard-shipping"/> Standard Shipping<br/>
							</form>
						</div>

						<div className="refine-results-side-bar-section">
							<span>Brand Name</span>
							<form>
								<input onChange={this.handleFilter} type="radio" name="brand-name" data-min="A" data-max="Z" defaultChecked/> Show All<br/>
								<input onChange={this.handleFilter} type="radio" name="brand-name" data-min="A" data-max="G"/> A - G<br/>
								<input onChange={this.handleFilter} type="radio" name="brand-name" data-min="H" data-max="M"/> H - M<br/>
								<input onChange={this.handleFilter} type="radio" name="brand-name" data-min="N" data-max="S"/> N - S<br/>
								<input onChange={this.handleFilter} type="radio" name="brand-name" data-min="T" data-max="Z"/> T - Z<br/>
							</form>
						</div>

						<div className="refine-results-side-bar-section">
							<span>Customer Rating</span>
							<form>
								<input onChange={this.handleFilter} type="radio" defaultChecked name="customer-rating" value={0}/> Show All<br/>
								<input onChange={this.handleFilter} type="radio" name="customer-rating" value={4}/> <span>4 Stars</span> <span>& Up</span><br/>
								<input onChange={this.handleFilter} type="radio" name="customer-rating" value={3}/> <span>3 Stars</span> <span>& Up</span><br/>
								<input onChange={this.handleFilter} type="radio" name="customer-rating" value={2}/> <span>2 Stars</span> <span>& Up</span><br/>
								<input onChange={this.handleFilter} type="radio" name="customer-rating" value={1}/> <span>1 Star</span> <span>& Up</span>
							</form>
						</div>

					</div>

					<div className="search-results-display">
						{
							this.state.filteredResults.map((product, index) => {
								return <SearchResult key={index} product={product} />
							})
						}
					</div>
				</main>
			</div>
		);
	}
}

export default Search;