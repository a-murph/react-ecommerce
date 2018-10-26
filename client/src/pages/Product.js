import React, {Component} from "react";
import API from "../utils/API";
import UserReview from "../components/UserReview";

class Product extends Component {
	state = {
		product: {}
	};

	componentDidMount() {
		const id = window.location.href.split("/").pop();
		API.searchOne(id).then(res => {
			this.setState({
				product: res.data
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

				<main>
					<div className="product-page-top-bar">
						<div className="top-bar-search-result"><span>{this.state.product.category}</span></div>
						<div className="top-bar-social-media-share">
							<a className="social-media-share-link" href="##"><img alt="" className="social-media-share-img" src="#"/></a>
							<a className="social-media-share-link" href="##"><img alt="" className="social-media-share-img" src="#"/></a>
							<a className="social-media-share-link" href="##"><img alt="" className="social-media-share-img" src="#"/></a>
						</div>
					</div>

					<div className="product-main">
						<div className="product-main-display">
							<img alt="" className="product-main-display-img" src={`/${this.state.product.image}`}/>
						</div>
						<div className="product-main-info">
							<div className="main-info-title">
								<span>{this.state.product.name}</span>
								<a href="##"><span>{this.state.product.brand}</span></a>
								<div>
									<img alt="" src="#"/>
									<a href="##"><span>{this.state.product.reviews ? this.state.product.reviews.length : "0"} Customer Reviews</span></a>
								</div>
							</div>

							<div className="main-info-price">
									<div><span>List Price:</span> <span>${this.state.product.price}</span></div>
									<div><span>Price:</span> <span>${this.state.product.price}</span> <span>& FREE Shipping</span></div>
									<div><span>You Save:</span> <span>$0.00 (0%)</span></div>
							</div>


							<div className="main-info-sizing-color">
									<div><span>Size:</span> <span>Small</span></div>
									<div><span>Color:</span> <span>Black</span></div>
							</div>


							<div className="main-info-quantity-add-to-card">
									<div><span>Quantity:</span> <input type="number"/></div>
									<button type="button">Add to Cart</button>
							</div>

							<div className="main-info-add-to-list">
									<a href="##"><img alt="" src="#"/><span>Add to List</span></a>
									<a href="##"><img alt="" src="#"/><span>Add to Registry</span></a>
							</div>
						</div>
					</div>

					<div className="product-description">
						<div className="product-description-text">
							<span>About This Item</span>
							{this.state.product.description}
						</div>
						<img alt="" src="#" className="product-description-img"/>
					</div>

					<div className="recommended-products">
						<span>Customers Also Bought These Products</span>
						<div className="recommended-products-card-section">
							<a className="recommended-products-card-anchor" href="##"><div className="recommended-products-card">
								<img alt="" className="card-img" src="#"/>
								<div className="card-text">
									<span>Men's Platinum EverSoft Muscle</span>
									<span>Fruit of the Loom</span>
									<div><img alt="" className="" src="#"/><span>288</span></div>
									<span>$6.47</span>
								</div>
							</div></a>

							<a className="recommended-products-card-anchor" href="##"><div className="recommended-products-card">
								<img alt="" className="card-img" src="#"/>
								<div className="card-text">
									<span>Men's Platinum EverSoft Muscle</span>
									<span>Fruit of the Loom</span>
									<div><img alt="" className="" src="#"/><span>288</span></div>
									<span>$6.47</span>
								</div>
							</div></a>

							<a className="recommended-products-card-anchor" href="##"><div className="recommended-products-card">
								<img alt="" className="card-img" src="#"/>
								<div className="card-text">
									<span>Men's Platinum EverSoft Muscle</span>
									<span>Fruit of the Loom</span>
									<div><img alt="" className="" src="#"/><span>288</span></div>
									<span>$6.47</span>
								</div>
							</div></a>

							<a className="recommended-products-card-anchor" href="##"><div className="recommended-products-card">
								<img alt="" className="card-img" src="#"/>
								<div className="card-text">
									<span>Men's Platinum EverSoft Muscle</span>
									<span>Fruit of the Loom</span>
									<div><img alt="" className="" src="#"/><span>288</span></div>
									<span>$6.47</span>
								</div>
							</div></a>

							<a className="recommended-products-card-anchor" href="##"><div className="recommended-products-card">
								<img alt="" className="card-img" src="#"/>
								<div className="card-text">
									<span>Men's Platinum EverSoft Muscle</span>
									<span>Fruit of the Loom</span>
									<div><img alt="" className="" src="#"/><span>288</span></div>
									<span>$6.47</span>
								</div>
							</div></a>

							<a className="recommended-products-card-anchor" href="##"><div className="recommended-products-card">
								<img alt="" className="card-img" src="#"/>
								<div className="card-text">
									<span>Men's Platinum EverSoft Muscle</span>
									<span>Fruit of the Loom</span>
									<div><img alt="" className="" src="#"/><span>288</span></div>
									<span>$6.47</span>
								</div>
							</div></a>

						</div>
					</div>

					<div className="customer-reviews">
						<div className="customer-reviews-bar">
							<div className="reviews-summary">
								<span>{this.state.product.reviews ? this.state.product.reviews.length : "0"} Customer Reviews</span>
								<div><img alt="" src="#" className="total-review-stars"/><span>{this.state.product.rating} out of 5 stars</span></div>
								<div className="customer-reviews-breakdown-bars">
									<a href="##"><span>5 Star</span><img alt="" src="#"/><span>49%</span></a>
									<a href="##"><span>4 Star</span><img alt="" src="#"/><span>21%</span></a>
									<a href="##"><span>3 Star</span><img alt="" src="#"/><span>7%</span></a>
									<a href="##"><span>2 Star</span><img alt="" src="#"/><span>9%</span></a>
									<a href="##"><span>1 Star</span><img alt="" src="#"/><span>14%</span></a>
								</div>
							</div>

							<div className="write-a-review">
								<span>Review this Product</span>
								<span>Share your thoughts with other customers</span>
								<button className="write-a-review-button" type="button">Write a Review</button>
							</div>
						</div>

						<div className="reviews-section">
							{this.state.product.reviews ?
								this.state.product.reviews.map((review, index) => {
									return <UserReview key={index} review={review} />
								})
							: ""}
						</div>
					</div>
				</main>
			</div>
		);
	}
}

export default Product;