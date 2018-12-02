import React, {Component} from "react";
import Carousel from "nuka-carousel";

class ImgCarousel extends Component {
	render() {
		return (
			<Carousel wrapAround={true} slidesToShow={this.props.slideCount} heightMode="max">
				{this.props.images.map((image, index) => {
					return <img key={index} alt="" className="product-main-display-img" src={image}/>
				})}
			</Carousel>
		);
	}
};

export default ImgCarousel;