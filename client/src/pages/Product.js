import React, {Component} from "react";
import NavBar from "../components/NavBar";
import UserReview from "../components/UserReview";
import RecommendedItem from "../components/RecommendedItem";

class Product extends Component {
	state = {
		product: {},
		recommended: [
			{
				name: "Men's Platinum EverSoft Muscle",
				brand: "Fruit of the Loom",
				price: 6.47,
				image: "/img/product/reccomended.png",
				_id: "notrealyet"
			},
			{
				name: "Men's Platinum EverSoft Muscle",
				brand: "Fruit of the Loom",
				price: 6.47,
				image: "/img/product/reccomended.png",
				_id: "notrealyet"
			},
			{
				name: "Men's Platinum EverSoft Muscle",
				brand: "Fruit of the Loom",
				price: 6.47,
				image: "/img/product/reccomended.png",
				_id: "notrealyet"
			},
			{
				name: "Men's Platinum EverSoft Muscle",
				brand: "Fruit of the Loom",
				price: 6.47,
				image: "/img/product/reccomended.png",
				_id: "notrealyet"
			},
			{
				name: "Men's Platinum EverSoft Muscle",
				brand: "Fruit of the Loom",
				price: 6.47,
				image: "/img/product/reccomended.png",
				_id: "notrealyet"
			},
			{
				name: "Men's Platinum EverSoft Muscle",
				brand: "Fruit of the Loom",
				price: 6.47,
				image: "/img/product/reccomended.png",
				_id: "notrealyet"
			},
		]
	};

	componentDidMount() {
		this.setState({
			product: this.props.location.state.product
		});
	};

	render() {
		return (
			<div>
				<NavBar />

				<main>
					<div className="product-page-top-bar">
						<div className="top-bar-search-result product-body-font"><span>{this.state.product.category} > {this.state.product.subcategory}</span></div>
						<div className="top-bar-social-media-share">
							<a className="social-media-share-link" href="##"><i className="fab fa-facebook-f icon"></i></a>
							<a className="social-media-share-link" href="##"><i className="fab fa-pinterest-p icon"></i></a>
							<a className="social-media-share-link" href="##"><i className="fab fa-twitter icon"></i></a>
						</div>
					</div>

					<div className="product-main">
						<div className="product-main-display">
							<img alt="" className="product-main-display-img" src={`/${this.state.product.image}`}/>
						</div>
						<div className="product-main-info">
							<div className="main-info-title">
								<span className="product-title-font">{this.state.product.name}</span>
								<a href="##"><span className="product-bold-font">{this.state.product.brand}</span></a>
								<div>
									<img alt="" src="#"/>
									<a href="##"><span className="product-body-font">{this.state.product.reviews ? this.state.product.reviews.length : "0"} Customer Reviews</span></a>
								</div>
							</div>

							<div className="main-info-price">
									<div><span className="product-body-font">List Price:</span> <span className="product-body-font">${this.state.product.price}</span></div>
									<div><span className="product-body-font">Price:</span> <span className="product-body-font">${this.state.product.price}</span> <span className="product-bold-font">& FREE Shipping</span></div>
									<div><span className="product-body-font">You Save:</span> <span className="product-body-font">$0.00 (0%)</span></div>
							</div>


							<div className="main-info-sizing-color">
									<div><span className="product-body-font">Size:</span> <span className="product-body-font">Small</span></div>
									<div><span className="product-body-font">Color:</span> <span className="product-body-font">Black</span></div>
							</div>


							<div className="main-info-quantity-add-to-card">
									<div><span className="product-body-font">Quantity:</span> <input type="number" min={0} /></div>
									<button className="product-body-font add-to-cart-button" type="button">Add to Cart</button>
							</div>

							<div className="main-info-add-to-list">
									<a href="##"><img alt="" src="#"/><span className="product-bold-font">Add to List</span></a>
									<a href="##"><img alt="" src="#"/><span className="product-bold-font add-to-registry">Add to Registry</span></a>
							</div>
						</div>
					</div>

					<div className="product-description">
						<div className="product-description-text">
							<span className="product-title-font title">About This Item</span>
							<span className="product-body-font">{this.state.product.description}</span>
						</div>
						<img alt="" className="product-description-img" src={`/${this.state.product.image}`}/>
					</div>

					<div className="recommended-products">
						<span className="product-title-font title">Customers Also Bought These Products</span>
						<div className="recommended-products-card-section">
							{this.state.recommended.map((item, index) => {
								return <RecommendedItem product={item} key={index} />
							})}
						</div>
					</div>

					<div className="customer-reviews">
						<div className="customer-reviews-bar">
							<div className="reviews-summary">
								<span className="product-title-font">{this.state.product.reviews ? this.state.product.reviews.length : "0"} Customer Reviews</span>
								<div><img alt="" src="#" className="total-review-stars"/><span className="product-body-font">{this.state.product.rating} out of 5 stars</span></div>
								<div className="customer-reviews-breakdown-bars">
									<a href="##"><div className="star-container"><img alt="" src="/img/stars/5-star.svg"/></div><span className="text-container product-body-font">--%</span> <div className="meter"><span></span></div> </a>
									<a href="##"><div className="star-container"><img alt="" src="/img/stars/4-star.svg"/></div><span className="text-container product-body-font">--%</span> <div className="meter"><span></span></div> </a>
									<a href="##"><div className="star-container"><img alt="" src="/img/stars/3-star.svg"/></div><span className="text-container product-body-font">--%</span> <div className="meter"><span></span></div> </a>
									<a href="##"><div className="star-container"><img alt="" src="/img/stars/2-star.svg"/></div><span className="text-container product-body-font">--%</span> <div className="meter"><span></span></div> </a>
									<a href="##"><div className="star-container"><img alt="" src="/img/stars/1-star.svg"/></div><span className="text-container product-body-font">--%</span> <div className="meter"><span></span></div> </a>
								</div>
							</div>

							<div className="write-a-review">
								<span className="product-title-font">Review this Product</span>
								<span className="product-body-font">Share your thoughts with other customers</span>
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