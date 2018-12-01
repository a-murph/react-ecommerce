import React, {Component} from "react";
import API from "../utils/API"
import NavBar from "../components/NavBar";
import SearchResult from "../components/SearchResult";

class Search extends Component {
	state = {
		searchTerm: "",
		category: "",
		results: [],
		filteredResults: [],
		sort: "best-match",
		brands: []
	};

	handleSearch = (term, category) => {
		if (term && term !== "") {
			this.props.history.push(`/search?s=${term}&c=${category}`)
		}
	};

	componentDidMount() {
		window.scrollTo(0,0);
		let urlParams = new URLSearchParams(window.location.search);
		let s = urlParams.get('s');
		let c = urlParams.get('c');

		this.setState({
			searchTerm: s,
			category: c
		}, () => {
			let sub = (urlParams.get('sub') && urlParams.get('sub') === "true")
			API.search(this.state.searchTerm, this.state.category, sub).then(res => {
				this.setState({
					results: res.data,
					filteredResults: res.data
				}, () => {
					if (urlParams.get('o')) {
						this.handleSort({ target: { value: urlParams.get('o') } });
						this.setState({
							sort: urlParams.get('o')
						});
					}

					let newBrands = this.state.brands;
					this.state.filteredResults.forEach(product => {
						if (this.state.brands.indexOf(product.brand) === -1) {
							newBrands.push(product.brand);
						}
					});
					newBrands.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
					this.setState({
						brands: newBrands
					}, () => {console.log(this.state.brands)});
				});
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
				let shippingType = event.target.value;
				let shippingFiltered = [];

				shippingFiltered = this.state.results.filter(product => {
					return product.shipping === shippingType;
				});

				if (shippingType === "all")
					shippingFiltered = this.state.results;

				this.setState({
					filteredResults: shippingFiltered
				});

				break;

			case "brand-name":
				let brand = event.target.dataset.brand;

				if (brand !== "all") {
					let brandFiltered = this.state.results.filter(product => {
						return product.brand === brand;
					});

					this.setState({
						filteredResults: brandFiltered
					});
				} else {
					this.setState({
						filteredResults: this.state.results
					});
				}

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

	handleSort = event => {
		let sort = event.target.value;

		switch (sort) {
			case "best-match":
				let sortedBest = this.state.filteredResults;
				sortedBest.sort((a, b) => a._id - b._id);
				this.setState({
					filteredResults: sortedBest
				});
				break;

			case "low-high":
				let sortedLoHigh = this.state.filteredResults;
				sortedLoHigh.sort((a, b) => a.price - b.price);
				this.setState({
					filteredResults: sortedLoHigh
				});
				break;

			case "high-low":
				let sortedHighLo = this.state.filteredResults;
				sortedHighLo.sort((a, b) => b.price - a.price);
				this.setState({
					filteredResults: sortedHighLo
				});
				break;

			case "review-count":
				let sortedReviews = this.state.filteredResults;
				sortedReviews.sort((a, b) => b.reviews.length - a.reviews.length);
				this.setState({
					filteredResults: sortedReviews
				});
				break;

			default:
				console.log("invalid sort");
		}
	};

	render() {
		return (
			<div>
				<NavBar search={this.handleSearch} />

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
						<select onChange={this.handleSort} className="refine-results-drop-down search-body-font" name="sort-by">
							<option selected={this.state.sort === "best-match" ? "selected" : ""} value="best-match">Best Match</option>
							<option selected={this.state.sort === "low-high" ? "selected" : ""} value="low-high">Price: Low - High</option>
							<option selected={this.state.sort === "high-low" ? "selected" : ""} value="high-low">Price: High - Low</option>
							<option selected={this.state.sort === "review-count" ? "selected" : ""} value="review-count">Review Count</option>
						</select>
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
								<input onChange={this.handleFilter} type="radio" className="search-bar-item" name="price-range" data-min={0} data-max={25}/><span className="search-body-font">$0 - $25</span><br/>
								<input onChange={this.handleFilter} type="radio" className="search-bar-item" name="price-range" data-min={25} data-max={50}/><span className="search-body-font">$25 - $50</span><br/>
								<input onChange={this.handleFilter} type="radio" className="search-bar-item" name="price-range" data-min={50} data-max={100}/><span className="search-body-font">$50 - $100</span><br/>
								<input onChange={this.handleFilter} type="radio" className="search-bar-item" name="price-range" data-min={100} data-max={999999}/><span className="search-body-font">$100+</span><br/>
							</form>
						</div>

						<div className="search-bar-divider"></div>

						<div className="refine-results-side-bar-section">
							<span className="search-bold-font search-bar-item">Shipping</span>
							<form>
								<input onChange={this.handleFilter} type="radio" name="shipping" className="search-bar-item" value="all" defaultChecked/><span className="search-body-font">Show All</span><br/>
								<input onChange={this.handleFilter} type="radio" name="shipping" className="search-bar-item" value="FREE Shipping"/><span className="search-body-font">Free Shipping</span><br/>
								<input onChange={this.handleFilter} type="radio" name="shipping" className="search-bar-item" value="Same Day Shipping"/><span className="search-body-font">Same Day Shipping</span><br/>
								<input onChange={this.handleFilter} type="radio" name="shipping" className="search-bar-item" value="2-day Shipping"/><span className="search-body-font">2-Day Shipping</span><br/>
								<input onChange={this.handleFilter} type="radio" name="shipping" className="search-bar-item" value="Standard Shipping"/><span className="search-body-font">Standard Shipping</span><br/>
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

						<div className="search-bar-divider"></div>

						<div className="refine-results-side-bar-section">
							<span className="search-bold-font search-bar-item">Brand Name</span>
							<form>
								<input onChange={this.handleFilter} className="search-bar-item" type="radio" name="brand-name" data-brand="all" defaultChecked/><span className="search-body-font">Show All</span><br/>
								{this.state.brands.map((brand, index) => (
									<div key={index}>
										<input onChange={this.handleFilter} className="search-bar-item" type="radio" name="brand-name" data-brand={brand}/><span className="search-body-font">{brand}</span><br/>
									</div>
								))}
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