import React, {Component} from "react";
import {Link} from "react-router-dom";
import API from "../utils/API"
import NavBar from "../components/NavBar";
import UserReview from "../components/UserReview";
import ImgCarousel from "../components/Carousel";
import axios from "axios";

class Product extends Component {
	state = {
		product: {},
		recommended: [],
		ratings: [
			[0],
			[0],
			[0],
			[0],
			[0],
			[0]
		],
		imageId: 0,
		images: []
	};

	handleSearch = (term, category) => {
		if (term && term !== "") {
			this.props.history.push(`/search?s=${term}&c=${category}`)
		}
	};

	toggleModal = () => {
		document.getElementById("comment-modal").classList.toggle("hidden");
	};

	handleForm = event => {
		event.preventDefault();

		let review = {
			user: document.getElementById("form-name").value,
			rating: document.getElementById("form-rating").value,
			title: document.getElementById("form-title").value,
			text: document.getElementById("form-review").value,
			date: new Date(Date.now()).toLocaleDateString
		};

		API.postComment(this.state.product._id, review);
	};

	handleRecommendedLink = event => {
		this.props.history.push(`/product/${event.target.dataset.product}`);
		this.getProduct(this.setProduct);
	};

	getProduct = cb => {
		let id = "";
		if (this.props.location.state)
			id = this.props.location.state.product;
		else
			id = window.location.href.split("/")[4];

		if (typeof id === "string") {
			API.searchOne(id).then(res => {
				cb(res.data)
			})
		} else {
			cb(id);
		}
	}

	setProduct = (product) => {
		window.scrollTo(0,0);

		this.setState({
			product: product
		}, () => {
			this.state.product.reviews.forEach(review => {
				let scores = this.state.ratings;
				scores[review.rating]++;
				this.setState({
					ratings: scores
				});
			});

			API.search("", this.state.product.subcategory, true).then(res => {
				let recoms = res.data.filter(product => product.name !== this.state.product.name)
				this.setState({
					recommended: recoms
				});
			});

			this.setState({
				images: [`/${[this.state.product.image]}`]
			}, () => {
				let image = this.state.product.image.split(".");
				this.setState({
					imageId: image[0]
				}, () => {
					axios.get(`/${this.state.imageId}.2.jpeg`).then(response => {
						if (response.headers["content-type"] !== "text/html; charset=UTF-8") {
							this.setState({
								images: [...this.state.images, `/${this.state.imageId}.2.jpeg`]
							});
						}
					});
					axios.get(`/${this.state.imageId}.3.jpeg`).then(response => {
						if (response.headers["content-type"] !== "text/html; charset=UTF-8") {
							this.setState({
								images: [...this.state.images, `/${this.state.imageId}.3.jpeg`]
							});
						}
					});
				});
			})

		});
	};

	componentDidMount() {
		this.getProduct(this.setProduct);
	};

	render() {
		return (
			<div>
				<NavBar search={this.handleSearch} />

				<main>
					<div className="product-page-top-bar">
						<div className="top-bar-search-result product-body-font"><span><Link to={`/search?s=&c=${this.state.product.category}`}>{this.state.product.category}</Link> > <Link to={`/search?s=&c=${this.state.product.subcategory}&sub=true`}>{this.state.product.subcategory}</Link></span></div>
						<div className="top-bar-social-media-share">
							<a className="social-media-share-link" href="##"><i className="fab fa-facebook-f icon"></i></a>
							<a className="social-media-share-link" href="##"><i className="fab fa-pinterest-p icon"></i></a>
							<a className="social-media-share-link" href="##"><i className="fab fa-twitter icon"></i></a>
						</div>
					</div>

					<div className="product-main">
						<div className="product-main-display">
							{this.state.images.length > 1 ? (
								<ImgCarousel className="carousel-center" type="image" slideCount={1} items={this.state.images} />
							) : (
								<img alt="product" className="product-main-display-img" src={`/${this.state.product.image}`}/>
							)}
						</div>
						<div className="product-main-info">
							<div className="main-info-title">
								<span className="product-title-font">{this.state.product.name}</span>
								<a href="##"><span className="product-bold-font">{this.state.product.brand}</span></a>
								<div>
									<img className="product-stars" alt={`${this.state.product.rating} stars`} src={`/img/stars/${this.state.product.rating}-star.svg`}/>
									<a href="##"><span className="product-body-font">{this.state.product.reviews ? this.state.product.reviews.length : "0"} Customer Reviews</span></a>
								</div>
							</div>

							<div className="main-info-price">
									{this.state.product.listprice ? (
										<div><span className="product-body-font">List Price:</span> <span className="product-body-font">${this.state.product.listprice.toFixed(2)}</span></div>
									) : ""}
									<div><span className="product-body-font">Price:</span> <span className="product-body-font">${this.state.product.price ? this.state.product.price.toFixed(2) : "" }</span> <span className="product-bold-font">& FREE Shipping</span></div>
									<div><span className="product-body-font">You Save:</span> <span className="product-body-font">{this.state.product.listprice ? (
										`$${(this.state.product.listprice - this.state.product.price).toFixed(2)} (${((this.state.product.listprice - this.state.product.price)/this.state.product.listprice*100).toFixed(0)}%)`
									) : ("$0.00 (0%)")}</span></div>
							</div>

							<div className="main-info-sizing-color">
								{this.state.product.size ? (
									<select>
										{this.state.product.size.map((size, index) => <option key={index}>{size}</option>)}
									</select>
								) : ""}
								{this.state.product.color ? (
									<select>
										{this.state.product.color.map((color, index) => <option key={index}>{color}</option>)}
									</select>
								) : ""}
								{this.state.product.format ? (
									<select>
										{this.state.product.format.map((format, index) => <option key={index}>{format}</option>)}
									</select>
								) : ""}
							</div>


							<div className="main-info-quantity-add-to-card">
									<div><span className="product-body-font">Quantity:</span> <input type="number" min={0} /></div>
									<button className="product-body-font add-to-cart-button" type="button">Add to Cart</button>
							</div>

							<div className="main-info-add-to-list">
									<a href="##"><span className="product-bold-font">Add to List</span></a>
									<a href="##"><span className="product-bold-font add-to-registry">Add to Registry</span></a>
							</div>
						</div>
					</div>

					<div className="product-description">
						<div className="product-description-text">
							<span className="product-title-font title">About This Item</span>
							<span className="product-body-font">{this.state.product.description}</span>
						</div>
						<img alt="product" className="product-description-img" src={`/${this.state.imageId}.2.jpeg`} onError={(e)=>{e.target.onerror = null; e.target.src=`/${this.state.product.image}`}} />
					</div>

					<div className="recommended-products">
						<span className="product-title-font title">Customers Also Viewed These Products</span>
						<div className="recommended-products-card-section">
							<ImgCarousel type="item" items={this.state.recommended} slideCount={4} onClick={this.handleRecommendedLink} />
						</div>
					</div>

					<div className="customer-reviews">
						<div className="customer-reviews-bar">
							<div className="reviews-summary">
								<span className="product-title-font">{this.state.product.reviews ? this.state.product.reviews.length : "0"} Customer Reviews</span>
								<div><span className="product-body-font">{this.state.product.rating} out of 5 stars</span></div>
								<div className="customer-reviews-breakdown-bars">
									<a href="##">
										<div className="star-container">
											<img alt="5 stars" src="/img/stars/5-star.svg" />
										</div>
										<span className="text-container product-body-font">
											{(this.state.ratings[5] / (this.state.product.reviews ? this.state.product.reviews.length : 1)).toFixed(2) * 100}%
										</span>
										<meter className="meter"
											value={(this.state.ratings[5] / (this.state.product.reviews ? this.state.product.reviews.length : 1)).toFixed(2)}>
										<span></span></meter>
									</a>
									<a href="##">
										<div className="star-container">
											<img alt="4 stars" src="/img/stars/4-star.svg" />
										</div>
										<span className="text-container product-body-font">
											{(this.state.ratings[4] / (this.state.product.reviews ? this.state.product.reviews.length : 1)).toFixed(2) * 100}%
										</span>
										<meter className="meter"
											value={(this.state.ratings[4] / (this.state.product.reviews ? this.state.product.reviews.length : 1)).toFixed(2)}>
										<span></span></meter>
									</a>
									<a href="##">
										<div className="star-container">
											<img alt="3 stars" src="/img/stars/3-star.svg" />
										</div>
										<span className="text-container product-body-font">
											{(this.state.ratings[3] / (this.state.product.reviews ? this.state.product.reviews.length : 1)).toFixed(2) * 100}%
										</span>
										<meter className="meter"
											value={(this.state.ratings[3] / (this.state.product.reviews ? this.state.product.reviews.length : 1)).toFixed(2)}>
										<span></span></meter>
									</a>
									<a href="##">
										<div className="star-container">
											<img alt="2 stars" src="/img/stars/2-star.svg" />
										</div>
										<span className="text-container product-body-font">
											{(this.state.ratings[2] / (this.state.product.reviews ? this.state.product.reviews.length : 1)).toFixed(2) * 100}%
										</span>
										<meter className="meter"
											value={(this.state.ratings[2] / (this.state.product.reviews ? this.state.product.reviews.length : 1)).toFixed(2)}>
										<span></span></meter>
									</a>
									<a href="##">
										<div className="star-container">
											<img alt="1 star" src="/img/stars/1-star.svg" />
										</div>
										<span className="text-container product-body-font">
											{(this.state.ratings[1] / (this.state.product.reviews ? this.state.product.reviews.length : 1)).toFixed(2) * 100}%
										</span>
										<meter className="meter"
											value={(this.state.ratings[1] / (this.state.product.reviews ? this.state.product.reviews.length : 1)).toFixed(2)}>
										<span></span></meter>
									</a>
								</div>
							</div>

							<div className="write-a-review">
								<span className="product-title-font">Review this Product</span>
								<span className="product-body-font">Share your thoughts with other customers</span>
								<button onClick={this.toggleModal} className="write-a-review-button" type="button">Write a Review</button>
							</div>

							<div id="comment-modal" className="modal hidden" onClick={this.toggleModal}>
								<div className="modal-body" onClick={event => {event.stopPropagation()}}>
									<h5 className="modal-body-title title-font">Write a Review</h5>
									<form className="modal-form" onSubmit={this.handleForm}>
										<div className="modal-form-row">
											<label className="title-font" htmlFor="form-rating">Rating out of 5:</label><input type="number" name="form-rating" id="form-rating" min={1} max={5}></input>
										</div>
										<div className="modal-form-row">
											<label className="title-font" htmlFor="form-title">Review Title:</label><input type="text" name="form-title" id="form-title"></input>
										</div>
										<div className="modal-form-row">
											<label className="title-font" htmlFor="form-name">Your Name:</label><input type="text" name="form-name" id="form-name"></input>
										</div>
										<div className="modal-form-row">
											<label className="title-font" htmlFor="form-review">Review:</label><textarea name="form-review" id="form-review"></textarea>
										</div>
										<div className="modal-form-row">
											<input type="submit" value="Submit Review"></input>
										</div>
									</form>
								</div>
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