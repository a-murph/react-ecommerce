import React from "react";
import Carousel from "nuka-carousel";
import RecommendedItem from "./RecommendedItem";

const ImgCarousel = props => (
	<Carousel wrapAround={true} slidesToShow={props.slideCount} heightMode="max">
		{props.type === "image" ? (props.items.map((image, index) => {
			return <div key={index} className="img-container"><img alt="product" className="product-main-display-img" src={image}/></div>
		})) : props.type === "item" ? (
			props.items.map((item, index) => {
				return <RecommendedItem click={props.onClick} product={item} key={index} />
			})
		) : ""}
	</Carousel>
);

export default ImgCarousel;