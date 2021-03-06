import React from "react";

const RecommendedItem = props => (
	<div className="recommended-products-card">
		<img data-product={props.product._id} onClick={props.click} alt={props.product.name} className="card-img" src={`/${props.product.image}`}/>
		<div className="card-text">
			<span className="product-bold-font">{props.product.name}</span> <br></br>
			<span className="product-body-font">{props.product.brand}</span> <br></br>
			<div><img alt={`${props.product.rating} stars`} className="card-text-stars" src={`/img/stars/${props.product.rating}-star.svg`}/><span className="product-body-font">({props.product.reviews.length})</span></div>
			<span className="product-body-font">${props.product.price}</span>
		</div>
	</div>
);

export default RecommendedItem;