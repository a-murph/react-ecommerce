import React, {Component} from "react";

class Product extends Component {
	render() {
		return (
			<div>
				<nav className="menu-bar">
					<div className="nav-location-button"></div>
					<div className="nav-home-logo"></div>
					<div className="nav-search-bar">
						<div className="nav-search-filter-button"></div>
						<div className="nav-search-text-input"></div>
						<div className="nav-search-submit-button"></div>
					</div>
					<div className="nav-language-dropdown"> </div>
					<div className="nav-div-bar"></div>
					<div className="nav-account-dropdown"> </div>
					<div className="nav-orders-dropdown"> </div>
					<div className="nav-cart-button"> </div>
				</nav>

				<main>
					<div className="product-page-top-bar">
						<div className="top-bar-search-result"><span>Clothing/Big & Tall/Mens Big & Tall T-Shirts & Tank Tops/Mens Big & Tall T-Shirts & Tank Tops</span></div>
						<div className="top-bar-social-media-share">
							<a className="social-media-share-link" href="##"><img alt="" className="social-media-share-img" src="#"/></a>
							<a className="social-media-share-link" href="##"><img alt="" className="social-media-share-img" src="#"/></a>
							<a className="social-media-share-link" href="##"><img alt="" className="social-media-share-img" src="#"/></a>
						</div>
					</div>

					<div className="product-main">
						<div className="product-main-display">
							<img alt="" className="product-main-display-img" src="img/product1.jpeg"/>
						</div>
						<div className="product-main-info">
							<div className="main-info-title">
								<span>Men's Platinum Eversoft Short Sleeve Crew T Shirt</span>
								<a href="##"><span>Fruit of the Loom</span></a>
								<div>
									<img alt="" src="#"/>
									<a href="##"><span>542 Customer Reviews</span></a>
								</div>
							</div>

							<div className="main-info-price">
									<div><span>List Price:</span> <span>$42.50</span></div>
									<div><span>Price:</span> <span>$37.19</span> <span>& FREE Shipping</span></div>
									<div><span>You Save:</span> <span>$5.31 (12%)</span></div>
							</div>


							<div className="main-info-sizing-color">
									<div><span>Size:</span> <span>Small</span></div>
									<div><span>Color:</span> <span>Black</span></div>
							</div>


							<div className="main-info-quantity-add-to-card">
									<div><span>Quantity:</span> <input type="text"/></div>
									<button type="button">Add to Cart</button>
							</div>

							<div className="main-info-add-to-list">
									<a href="##"><img alt="" src="#"/><span>Add to List</span></a>
									<a href="##"><img alt="" src="#"/><span>Add to Registry</span></a>
							</div>
						</div>
					</div>

					<div className="product-description">
						<div className="product-description-text">
							<span>About This Item</span>
							<p>We aim to show you accurate product information. Manufacturers, suppliers and others provide what you see here, and we have not verified it. </p>
							<p>The Fruit of the Loom Platinum EverSoft Men's Crew t-shirt is America's #1 selling t-shirt brand. These t-shirts are made with EverSoft ring spun cotton and now feature Dual Defense technology providing wicking and odor protection. From mowing the yard to hanging out with friends, we know your t-shirt endures a lot, so we incorporated a ribbed collar that won't lose its shape, as well as double-needle stitching on the neck and shoulders to give you more durability. This t-shirt is tag-free and available in a variety of colors to choose from. </p>
							<span>Fruit of the Loom Men's Platinum Eversoft Short Sleeve Crew T Shirt, up to Size 4XL:</span>
							<ul>
								<li>Mid-weight fabric that feels substantial, yet still soft</li>
								<li>EverSoft ring spun cotton provides premium softness wash after wash</li>
								<li>Dual Defense Technology for wicking & odor protection</li>
								<li>Fits generously through the body</li>
								<li>Ribbed collar holds its shape</li>
								<li>Shoulder-to-shoulder neck tape for comfort and durability</li>
								<li>Double-needle stitching on the neck and shoulders provide superior durability</li>
								<li>Sizes S-4XL</li>
								<li>Available in a variety of stylish colors</li>
							</ul>
						</div>
						<img alt="" src="#" className="product-description-img"/>
					</div>

					<div className="recommended-products">
						<span>Customers Also Bought These Products</span>
						<div className="recommended-products-card-section">
							<a className="recommended-products-card-anchor" href="##"><div className="recommended-products-card">
								<img alt="" className="card-img" src="#"/>
								<div className="card-text">
									<span>Men's Platinum EverSoft Muscle</span>
									<span>Fruit of the Loom</span>
									<div><img alt="" className="" src="#"/><span>288</span></div>
									<span>$6.47</span>
								</div>
							</div></a>

							<a className="recommended-products-card-anchor" href="##"><div className="recommended-products-card">
								<img alt="" className="card-img" src="#"/>
								<div className="card-text">
									<span>Men's Platinum EverSoft Muscle</span>
									<span>Fruit of the Loom</span>
									<div><img alt="" className="" src="#"/><span>288</span></div>
									<span>$6.47</span>
								</div>
							</div></a>

							<a className="recommended-products-card-anchor" href="##"><div className="recommended-products-card">
								<img alt="" className="card-img" src="#"/>
								<div className="card-text">
									<span>Men's Platinum EverSoft Muscle</span>
									<span>Fruit of the Loom</span>
									<div><img alt="" className="" src="#"/><span>288</span></div>
									<span>$6.47</span>
								</div>
							</div></a>

							<a className="recommended-products-card-anchor" href="##"><div className="recommended-products-card">
								<img alt="" className="card-img" src="#"/>
								<div className="card-text">
									<span>Men's Platinum EverSoft Muscle</span>
									<span>Fruit of the Loom</span>
									<div><img alt="" className="" src="#"/><span>288</span></div>
									<span>$6.47</span>
								</div>
							</div></a>

							<a className="recommended-products-card-anchor" href="##"><div className="recommended-products-card">
								<img alt="" className="card-img" src="#"/>
								<div className="card-text">
									<span>Men's Platinum EverSoft Muscle</span>
									<span>Fruit of the Loom</span>
									<div><img alt="" className="" src="#"/><span>288</span></div>
									<span>$6.47</span>
								</div>
							</div></a>

							<a className="recommended-products-card-anchor" href="##"><div className="recommended-products-card">
								<img alt="" className="card-img" src="#"/>
								<div className="card-text">
									<span>Men's Platinum EverSoft Muscle</span>
									<span>Fruit of the Loom</span>
									<div><img alt="" className="" src="#"/><span>288</span></div>
									<span>$6.47</span>
								</div>
							</div></a>

						</div>
					</div>

					<div className="customer-reviews">
						<div className="customer-reviews-bar">
							<div className="reviews-summary">
								<span>289 Customer Reviews</span>
								<div><img alt="" src="#" className="total-review-stars"/><span>3.8 out of 5 stars</span></div>
								<div className="customer-reviews-breakdown-bars">
									<a href="##"><span>5 Star</span><img alt="" src="#"/><span>49%</span></a>
									<a href="##"><span>4 Star</span><img alt="" src="#"/><span>21%</span></a>
									<a href="##"><span>3 Star</span><img alt="" src="#"/><span>7%</span></a>
									<a href="##"><span>2 Star</span><img alt="" src="#"/><span>9%</span></a>
									<a href="##"><span>1 Star</span><img alt="" src="#"/><span>14%</span></a>
								</div>
							</div>

							<div className="write-a-review">
								<span>Review this Product</span>
								<span>Share your thoughts with other customers</span>
								<button className="write-a-review-button" type="button">Write a Review</button>
							</div>
						</div>

						<div className="reviews-section">
							<div className="review">
								<div className="review-item"><img alt="" src="#"/><span>Username</span></div>
								<div className="review-item"><img alt="" src="#"/><span>Review Title</span></div>
								<span className="review-item">February 3rd, 2018</span>
								<div className="review-item"><span>Size: Medium</span><span>Color: White</span><span>Verified Purchase</span></div>
								<div className="review-item"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id imperdiet purus. Duis vitae bibendum lorem, vel pharetra enim. Quisque tincidunt porttitor nisi, id convallis augue gravida id. Aliquam viverra id ante ut vehicula. Nullam porttitor eros libero, id maximus tortor scelerisque eu. Ut nisl tellus, pharetra non elit eget, tempus condimentum nulla. In quis diam id orci fermentum accumsan ut id orci. Duis sollicitudin pharetra tempor. Donec sed ligula blandit, sodales nunc id, tempus enim. Donec ultricies eu velit semper semper. Sed nec faucibus nibh. </p></div>
								<span className="review-item">7 people found this helpful</span>
								<div className="review-item review-buttons"> <a href="##"><img alt="" src="#"/><span>Helpful</span></a> <a href="##"><span>Comment</span></a> <a href="##"><span>Report Abuse</span></a></div>
							</div>
							<div className="review">
								<div className="review-item"><img alt="" src="#"/><span>Username</span></div>
								<div className="review-item"><img alt="" src="#"/><span>Review Title</span></div>
								<span className="review-item">February 3rd, 2018</span>
								<div className="review-item"><span>Size: Medium</span><span>Color: White</span><span>Verified Purchase</span></div>
								<div className="review-item"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id imperdiet purus. Duis vitae bibendum lorem, vel pharetra enim. Quisque tincidunt porttitor nisi, id convallis augue gravida id. Aliquam viverra id ante ut vehicula. Nullam porttitor eros libero, id maximus tortor scelerisque eu. Ut nisl tellus, pharetra non elit eget, tempus condimentum nulla. In quis diam id orci fermentum accumsan ut id orci. Duis sollicitudin pharetra tempor. Donec sed ligula blandit, sodales nunc id, tempus enim. Donec ultricies eu velit semper semper. Sed nec faucibus nibh. </p></div>
								<span className="review-item">7 people found this helpful</span>
								<div className="review-item review-buttons"> <a href="##"><img alt="" src="#"/><span>Helpful</span></a> <a href="##"><span>Comment</span></a> <a href="##"><span>Report Abuse</span></a></div>
							</div>
							<div className="review">
								<div className="review-item"><img alt="" src="#"/><span>Username</span></div>
								<div className="review-item"><img alt="" src="#"/><span>Review Title</span></div>
								<span className="review-item">February 3rd, 2018</span>
								<div className="review-item"><span>Size: Medium</span><span>Color: White</span><span>Verified Purchase</span></div>
								<div className="review-item"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id imperdiet purus. Duis vitae bibendum lorem, vel pharetra enim. Quisque tincidunt porttitor nisi, id convallis augue gravida id. Aliquam viverra id ante ut vehicula. Nullam porttitor eros libero, id maximus tortor scelerisque eu. Ut nisl tellus, pharetra non elit eget, tempus condimentum nulla. In quis diam id orci fermentum accumsan ut id orci. Duis sollicitudin pharetra tempor. Donec sed ligula blandit, sodales nunc id, tempus enim. Donec ultricies eu velit semper semper. Sed nec faucibus nibh. </p></div>
								<span className="review-item">7 people found this helpful</span>
								<div className="review-item review-buttons"> <a href="##"><img alt="" src="#"/><span>Helpful</span></a> <a href="##"><span>Comment</span></a> <a href="##"><span>Report Abuse</span></a></div>
							</div>
							<div className="review">
								<div className="review-item"><img alt="" src="#"/><span>Username</span></div>
								<div className="review-item"><img alt="" src="#"/><span>Review Title</span></div>
								<span className="review-item">February 3rd, 2018</span>
								<div className="review-item"><span>Size: Medium</span><span>Color: White</span><span>Verified Purchase</span></div>
								<div className="review-item"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id imperdiet purus. Duis vitae bibendum lorem, vel pharetra enim. Quisque tincidunt porttitor nisi, id convallis augue gravida id. Aliquam viverra id ante ut vehicula. Nullam porttitor eros libero, id maximus tortor scelerisque eu. Ut nisl tellus, pharetra non elit eget, tempus condimentum nulla. In quis diam id orci fermentum accumsan ut id orci. Duis sollicitudin pharetra tempor. Donec sed ligula blandit, sodales nunc id, tempus enim. Donec ultricies eu velit semper semper. Sed nec faucibus nibh. </p></div>
								<span className="review-item">7 people found this helpful</span>
								<div className="review-item review-buttons"> <a href="##"><img alt="" src="#"/><span>Helpful</span></a> <a href="##"><span>Comment</span></a> <a href="##"><span>Report Abuse</span></a></div>
							</div>
						</div>
					</div>
				</main>
			</div>
		);
	}
}

export default Product;