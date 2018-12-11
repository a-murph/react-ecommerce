import React, {Component} from "react";
import Carousel from "nuka-carousel";
import RecommendedItem from "./RecommendedItem";

class ImgCarousel extends Component {
	render() {

		return (
			<Carousel wrapAround={true} slidesToShow={this.props.slideCount} heightMode="max">
				{this.props.type === "image" ? (this.props.items.map((image, index) => {
					return <div key={index} className="img-container"><img alt="product image" className="product-main-display-img" src={image}/></div>
				})) : this.props.type === "item" ? (
					this.props.items.map((item, index) => {
						return <RecommendedItem click={this.props.onClick} product={item} key={index} />
					})
				) : ""}
			</Carousel>
		);
	}
};

export default ImgCarousel;