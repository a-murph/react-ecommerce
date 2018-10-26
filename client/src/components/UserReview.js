import React from "react";

const UserReview = props => (
	<div className="review">
		<div className="review-item"><img alt="" src="#"/><span>{props.review.user}</span></div>
		<div className="review-item"><img alt="" src="#"/><span>{props.review.rating} out of 5 Stars </span><span>Review Title</span></div>
		<span className="review-item">{props.review.date}</span>
		<div className="review-item"><span>Size: Medium </span><span>Color: White </span><span>Verified Purchase</span></div>
		<div className="review-item"><pre>{props.review.text}</pre></div>
		<span className="review-item">7 people found this helpful</span>
		<div className="review-item review-buttons"> <a href="##"><img alt="" src="#"/><span>Helpful</span></a> <a href="##"><span>Comment</span></a> <a href="##"><span>Report Abuse</span></a></div>
	</div>
);

export default UserReview