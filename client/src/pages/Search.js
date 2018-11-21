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
					<div className="nav-home-logo"><img alt="" className="logo-nav" src="img/logo3.svg"/></div>
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
								<span className="search-body-font">1 - {this.state.filteredResults.length} of {this.state.filteredResults.length}</span>
							: <span className="search-body-font">0</span>
						}
						<span className="search-body-font"> results in </span><span className="search-body-font">All Categories: </span><span className="search-body-font">"{this.state.searchTerm}"</span>
					</div>
					<div className="refine-results-sort-by-section">
						<span className="search-body-font">Sort by</span>
						<div className="refine-results-drop-down"></div>
					</div>
				</div>

				<main className="search-main-section">

					<div className="refine-results-side-bar">
						<span className="search-bold-font">Show Results For</span>

						<div className="refine-results-side-bar-section">
							<span className="search-bold-font search-bar-item">Price</span>
							<form>
								<input onChange={this.handleFilter} type="text" id="price-min" className="search-bar-item" name="price-min" placeholder=" $ Min"/><span className="search-body-font search-bar-item search-to">to</span><input onChange={this.handleFilter} type="text" className="search-bar-item" id="price-max" name="price-max" placeholder=" $ Max"/><input className="search-body-font search-bar-item search-bar-submit" type="submit" value="Go"/><br/>
								<input onChange={this.handleFilter} type="radio" className="search-bar-item" defaultChecked name="price-range" data-min={0} data-max={99999}/><span className="search-body-font">All Prices</span><br/>
								<input onChange={this.handleFilter} type="radio" className="search-bar-item" name="price-range" data-min={0} data-max={5}/><span className="search-body-font">$0 - $5</span><br/>
								<input onChange={this.handleFilter} type="radio" className="search-bar-item" name="price-range" data-min={5} data-max={10}/><span className="search-body-font">$5 - $10</span><br/>
								<input onChange={this.handleFilter} type="radio" className="search-bar-item" name="price-range" data-min={10} data-max={15}/><span className="search-body-font">$10 - $15</span><br/>
								<input onChange={this.handleFilter} type="radio" className="search-bar-item" name="price-range" data-min={15} data-max={99999}/><span className="search-body-font">$15+</span><br/>
							</form>
						</div>

						<div className="search-bar-divider"></div>

						<div className="refine-results-side-bar-section">
							<span className="search-bold-font search-bar-item">Shipping</span>
							<form>
								<input type="radio" name="shipping" className="search-bar-item" value="show-all" defaultChecked/><span className="search-body-font">Show All</span><br/>
								<input type="radio" name="shipping" className="search-bar-item" value="free-shipping"/><span className="search-body-font">Free Shipping</span><br/>
								<input type="radio" name="shipping" className="search-bar-item" value="same-day-shipping"/><span className="search-body-font">Same Day Shipping</span><br/>
								<input type="radio" name="shipping" className="search-bar-item" value="2-day-shipping"/><span className="search-body-font">2-Day Shipping</span><br/>
								<input type="radio" name="shipping" className="search-bar-item" value="standard-shipping"/><span className="search-body-font">Standard Shipping</span><br/>
							</form>
						</div>

						<div className="search-bar-divider"></div>

						<div className="refine-results-side-bar-section">
							<span className="search-bold-font search-bar-item">Brand Name</span>
							<form>
								<input onChange={this.handleFilter} className="search-bar-item" type="radio" name="brand-name" data-min="A" data-max="Z" defaultChecked/><span className="search-body-font">Show All</span><br/>
								<input onChange={this.handleFilter} className="search-bar-item" type="radio" name="brand-name" data-min="A" data-max="G"/><span className="search-body-font">A - G</span><br/>
								<input onChange={this.handleFilter} className="search-bar-item" type="radio" name="brand-name" data-min="H" data-max="M"/><span className="search-body-font">H - M</span><br/>
								<input onChange={this.handleFilter} className="search-bar-item" type="radio" name="brand-name" data-min="N" data-max="S"/><span className="search-body-font">N - S</span><br/>
								<input onChange={this.handleFilter} className="search-bar-item" type="radio" name="brand-name" data-min="T" data-max="Z"/><span className="search-body-font">>T - Z</span><br/>
							</form>
						</div>

						<div className="search-bar-divider"></div>

						<div className="refine-results-side-bar-section">
							<span className="search-bold-font search-bar-item">Customer Rating</span>
							<form>
								<input onChange={this.handleFilter} className="search-bar-item" type="radio" defaultChecked name="customer-rating" value={0}/><span className="search-body-font">Show All</span><br/>
								<input onChange={this.handleFilter} className="search-bar-item" type="radio" name="customer-rating" value={4}/> <span className="search-body-font">4 Stars</span> <span className="search-body-font">& Up</span><br/>
								<input onChange={this.handleFilter} className="search-bar-item" type="radio" name="customer-rating" value={3}/> <span className="search-body-font">3 Stars</span> <span className="search-body-font">& Up</span><br/>
								<input onChange={this.handleFilter} className="search-bar-item" type="radio" name="customer-rating" value={2}/> <span className="search-body-font">2 Stars</span> <span className="search-body-font">& Up</span><br/>
								<input onChange={this.handleFilter} className="search-bar-item" type="radio" name="customer-rating" value={1}/> <span className="search-body-font">1 Star</span> <span className="search-body-font">& Up</span>
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