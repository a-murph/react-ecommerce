import React, {Component} from "react";
import {Link} from "react-router-dom";
import API from "../utils/API"
import NavBar from "../components/NavBar";
import UserReview from "../components/UserReview";
import RecommendedItem from "../components/RecommendedItem";
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

		API.postComment(this.state.product._id, review).then(response => {console.log(response)});
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
					axios.get(`/${this.state.imageId}.2.jpeg`).then(() => {
						this.setState({
							images: [...this.state.images, `/${this.state.imageId}.2.jpeg`]
						});
					});
					axios.get(`/${this.state.imageId}.3.jpeg`).then(() => {
						this.setState({
							images: [...this.state.images, `/${this.state.imageId}.3.jpeg`]
						});
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
						{/* <div className="product-main-display">
							<div>
								<img alt="" className="product-main-display-img" src={`/${this.state.product.image}`}/>
							</div>
							{this.state.images >= 2 ? (
								<div>
									<img alt="" className="product-main-display-img" src={`/${this.state.imageId}.2.jpeg`}/>
								</div>
							) : ""}
							{this.state.images >= 3 ? (
								<div>
									<img alt="" className="product-main-display-img" src={`/${this.state.imageId}.3.jpeg`}/>
								</div>
							) : ""}
						</div> */}
						<div className="product-main-display">
							<ImgCarousel slideCount={1} images={this.state.images} />
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
									<div><span className="product-body-font">List Price:</span> <span className="product-body-font">${this.state.product.price ? this.state.product.price.toFixed(2) : "" }</span></div>
									<div><span className="product-body-font">Price:</span> <span className="product-body-font">${this.state.product.price ? this.state.product.price.toFixed(2) : "" }</span> <span className="product-bold-font">& FREE Shipping</span></div>
									<div><span className="product-body-font">You Save:</span> <span className="product-body-font">$0.00 (0%)</span></div>
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
						<img alt="" className="product-description-img" src={`/${this.state.imageId}.2.jpeg`} onError={(e)=>{e.target.onerror = null; e.target.src=`/${this.state.product.image}`}} />
					</div>

					<div className="recommended-products">
						<span className="product-title-font title">Customers Also Viewed These Products</span>
						<div className="recommended-products-card-section">
							{this.state.recommended.map((item, index) => {
								if (index < 6)
									return <RecommendedItem click={this.handleRecommendedLink} product={item} key={index} />
							})}
						</div>
					</div>

					<div className="customer-reviews">
						<div className="customer-reviews-bar">
							<div className="reviews-summary">
								<span className="product-title-font">{this.state.product.reviews ? this.state.product.reviews.length : "0"} Customer Reviews</span>
								<div><img alt="" src="#" className="total-review-stars" /><span className="product-body-font">{this.state.product.rating} out of 5 stars</span></div>
								<div className="customer-reviews-breakdown-bars">
									<a href="##">}
										<div className="star-container">
											<img alt="" src="/img/stars/5-star.svg" />
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
											<img alt="" src="/img/stars/4-star.svg" />
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
											<img alt="" src="/img/stars/3-star.svg" />
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
											<img alt="" src="/img/stars/2-star.svg" />
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
											<img alt="" src="/img/stars/1-star.svg" />
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

							<div id="comment-modal" className="hidden">
								<form onSubmit={this.handleForm}>
									<input type="number" id="form-rating" placeholder="Stars" min={1} max={5}></input>
									<input type="text" id="form-title" placeholder="Review Title"></input>
									<input type="text" id="form-name" placeholder="Username"></input>
									<textarea id="form-review" placeholder="Review Body"></textarea>
									<input type="submit" value="Submit Review"></input>
								</form>
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