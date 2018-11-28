import React from "react";
import {Link} from "react-router-dom"

const RecommendedItem = props => (
	<Link className="recommended-products-card-anchor" to={`/product/${props.product._id}`}><div className="recommended-products-card">
		<img alt="" className="card-img" src={`/${props.product.image}`}/>
		<div className="card-text">
			<span className="product-bold-font">{props.product.name}</span> <br></br>
			<span className="product-body-font">{props.product.brand}</span> <br></br>
			<div><img alt="" className="" src={`/img/stars/${props.product.rating}-star.svg`}/><span className="product-body-font">({props.product.reviews.length})</span></div>
			<span className="product-body-font">${props.product.price}</span>
		</div>
	</div></Link>
);

export default RecommendedItem;