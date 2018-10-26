import React from "react";
import {Link} from "react-router-dom";

const SearchResult = props => (
	<Link className="search-result-card" to={{ pathname: `/product/${props.product._id}`, state: { product: props.product} }}>
		<img alt="" className="search-result-card-img" src={props.product.image}/>
		<div className="search-result-card-text">
			<span>{props.product.name}</span>
			<div><span>${props.product.price.toFixed(2)}</span> <span>(insert img) free shipping tag</span></div>
			<div><span>{props.product.rating} Stars </span><span>({props.product.reviews.length} Reviews)</span></div>
		</div>
	</Link>
);

export default SearchResult