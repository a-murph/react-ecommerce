import React from "react";

const UserReview = props => (
	<div className="review">
		<div className="review-header">
			<div className="review-item"><span className="review-title-font">Review Title</span> <span className="review-body-font">{props.review.rating} out of 5 Stars </span> <i className="fas fa-check-circle"></i></div>
			<div className="review-item"><span className="review-italics-font">On {props.review.date}</span> <span className="review-italics-font">by {props.review.user}</span></div>
			<div className="review-item"><span className="review-italics-font">Size: Medium </span><span className="review-italics-font">Color: White </span></div>
		</div>
		<div className="review-body">
			<div className="review-item"><p className="review-body-font">{props.review.text}</p></div>
		</div>
		<div className="review-footer">
			<span className="review-item review-italics-font">7 people found this helpful</span>
			<div className="review-item review-buttons">
				<div><a href="##" className="product-body-font"><i className="far fa-thumbs-up"></i><span> Helpful</span></a></div>
				<div><a href="##" className="product-body-font"><i className="far fa-comment"></i><span> Comment</span></a></div>
				<div><a href="##" className="product-body-font"><i className="far fa-flag"></i><span> Report Abuse</span></a></div>
			</div>
		</div>
	</div>
);

export default UserReview