import React from "react";
import {Link} from "react-router-dom";

const SearchResult = props => (
	<Link className="search-result-card" to={{ pathname: `/product/${props.product._id}`, state: { product: props.product} }}>
		<img alt="" className="search-result-card-img" src={props.product.image}/>
		<div className="search-result-card-text">
			<span className="search-bold-font">{props.product.name}</span>
			<div><span className="search-body-font">${props.product.price.toFixed(2)}</span> <i className="fas fa-check-circle icon"></i> <span className="search-body-font">FREE SHIPPING</span></div>
			<div> <img className="review-stars" alt="" src="/img/stars/0-star.svg"/> <span className="search-body-font">{props.product.rating} Stars </span><span className="search-body-font">({props.product.reviews.length} Reviews)</span></div>
		</div>
	</Link>
);

export default SearchResult