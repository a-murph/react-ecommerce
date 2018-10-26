import React from "react";

const SearchResult = props => (
	<a className="search-result-card" href={`/product/${props.product._id}`}>
		<img alt="" className="search-result-card-img" src={props.product.img}/>
		<div className="search-result-card-text">
			<span>{props.product.name}</span>
			<div><span>${props.product.price.toFixed(2)}</span> <span>(insert img) free shipping tag</span></div>
			<div><span>{props.product.rating} Stars </span><span>({props.product.reviews.length} Reviews)</span></div>
		</div>
	</a>
);

export default SearchResult