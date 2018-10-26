import React, {Component} from "react";
import API from "../utils/API"

class Search extends Component {
	state = {
		searchTerm: "",
		results: []
	};

	componentDidMount() {
		let urlParams = new URLSearchParams(window.location.search);
		let s = urlParams.get('s');

		this.setState({
			searchTerm: s
		}, () => {
			API.search(this.state.searchTerm).then(res => {
				this.setState({
					results: res.data
				}, () => {console.log(this.state.results)});
			});
		});
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
						<span>1-8</span><span> of over </span><span>60,000</span><span> results for </span><span>Clothing, Shoes & Jewelry: </span><span>"t-shirt"</span>
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
								<input type="text" name="price-min" placeholder="$"/><span>to</span><input type="text" name="price-max" placeholder="$"/><input type="submit" value="Go"/><br/>
								<input type="checkbox" name="price-range" value="0-5"/><span>$0 - $5</span><br/>
								<input type="checkbox" name="price-range" value="5-10"/><span>$5 - $10</span><br/>
								<input type="checkbox" name="price-range" value="10-15"/><span>$10 - $15</span><br/>
								<input type="checkbox" name="price-range" value="15+"/><span>$15+</span><br/>
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
								<input type="radio" name="brand-name" value="Show-All" defaultChecked/> Show All<br/>
								<input type="radio" name="brand-name" value="ABCD"/> ABCD<br/>
								<input type="radio" name="brand-name" value="EFG"/> EFG<br/>
								<input type="radio" name="brand-name" value="HIJK"/> HIJK<br/>
								<input type="radio" name="brand-name" value="LMNOP"/> LMNOP<br/>
							</form>
						</div>

						<div className="refine-results-side-bar-section">
							<span>Customer Rating</span>
							<form>
								<input type="checkbox" name="customer-rating" value="4"/> <span>(insert img) 4 Stars</span> <span>& Up</span><br/>
								<input type="checkbox" name="customer-rating" value="3"/> <span>(insert img) 3 Stars</span> <span>& Up</span><br/>
								<input type="checkbox" name="customer-rating" value="2"/> <span>(insert img) 2 Stars</span> <span>& Up</span><br/>
								<input type="checkbox" name="customer-rating" value="1"/> <span>(insert img) 1 Star</span> <span>& Up</span>
							</form>
						</div>

					</div>

					<div className="search-results-display">

						<a className="search-result-card" href="##">
							<img alt="" className="search-result-card-img" src="#"/>
							<div className="search-result-card-text">
								<span>The Name of the Product</span>
								<div><span>$12.99</span> <span>(insert img) free shipping tag</span></div>
								<div><span>(insert img) Customer Rating Stars</span><span>238</span></div>
							</div>
						</a>
						<a className="search-result-card" href="##">
							<img alt="" className="search-result-card-img" src="#"/>
							<div className="search-result-card-text">
								<span>The Name of the Product</span>
								<div><span>$12.99</span> <span>(insert img) free shipping tag</span></div>
								<div><span>(insert img) Customer Rating Stars</span><span>238</span></div>
							</div>
						</a>
						<a className="search-result-card" href="##">
							<img alt="" className="search-result-card-img" src="#"/>
							<div className="search-result-card-text">
								<span>The Name of the Product</span>
								<div><span>$12.99</span> <span>(insert img) free shipping tag</span></div>
								<div><span>(insert img) Customer Rating Stars</span><span>238</span></div>
							</div>
						</a>
						<a className="search-result-card" href="##">
							<img alt="" className="search-result-card-img" src="#"/>
							<div className="search-result-card-text">
								<span>The Name of the Product</span>
								<div><span>$12.99</span> <span>(insert img) free shipping tag</span></div>
								<div><span>(insert img) Customer Rating Stars</span><span>238</span></div>
							</div>
						</a>
						<a className="search-result-card" href="##">
							<img alt="" className="search-result-card-img" src="#"/>
							<div className="search-result-card-text">
								<span>The Name of the Product</span>
								<div><span>$12.99</span> <span>(insert img) free shipping tag</span></div>
								<div><span>(insert img) Customer Rating Stars</span><span>238</span></div>
							</div>
						</a>
						<a className="search-result-card" href="##">
							<img alt="" className="search-result-card-img" src="#"/>
							<div className="search-result-card-text">
								<span>The Name of the Product</span>
								<div><span>$12.99</span> <span>(insert img) free shipping tag</span></div>
								<div><span>(insert img) Customer Rating Stars</span><span>238</span></div>
							</div>
						</a>
						<a className="search-result-card" href="##">
							<img alt="" className="search-result-card-img" src="#"/>
							<div className="search-result-card-text">
								<span>The Name of the Product</span>
								<div><span>$12.99</span> <span>(insert img) free shipping tag</span></div>
								<div><span>(insert img) Customer Rating Stars</span><span>238</span></div>
							</div>
						</a>
						<a className="search-result-card" href="##">
							<img alt="" className="search-result-card-img" src="#"/>
							<div className="search-result-card-text">
								<span>The Name of the Product</span>
								<div><span>$12.99</span> <span>(insert img) free shipping tag</span></div>
								<div><span>(insert img) Customer Rating Stars</span><span>238</span></div>
							</div>
						</a>

					</div>
				</main>
			</div>
		);
	}
}

export default Search;