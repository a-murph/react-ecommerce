import React, {Component} from "react";

class Home extends Component {
	render() {
		return (
			<div class="container">
				<div class="top-bar">
					<div class="announcement-container">
						<span class="title-font">FREE 3-day shippping and FREE returns | Amazon Prime Eligible</span>
					</div>
				</div>

				<div class="logo-container">
					<h1 class="logo-font">West Indigo</h1>
				</div>

				<nav class="home-menu-bar">
					<div class="home-nav-location-button">
						<img class="icon" src="img/location-icon.svg" />
						<div class="text-container">
							<span class="nav-body-font">Deliver to Name</span>
							<span class="nav-title-font">Fanwood 07023</span>
						</div>
					</div>
					<div class="home-nav-search-bar">
						<div class="home-nav-search-filter-button">
								<span class="nav-font-white">All</span>
								<img class="img" src="img/arrow-down-white.svg" />
						</div>
						<div class="home-nav-search-text-input"></div>
						<div class="home-nav-search-submit-button"><img class="icon" src="img/search-icon.svg" /></div>
					</div>
					<div class="home-nav-language-dropdown">
						<span class="nav-body-font">EN</span>
						<img class="img" src="img/arrow-down.svg" />
					</div>
					<div class="home-nav-div-bar"></div>
					<div class="home-nav-account-dropdown">
						<span class="nav-body-font">Hello, Name</span>
						<div class="bottom-container"><span class="nav-title-font">Account & Lists</span><img class="img" src="img/arrow-down.svg" /></div>
					</div>
					<div class="home-nav-orders-dropdown">
						<div class="bottom-container"><span class="nav-title-font">Orders</span><img class="img" src="img/arrow-down.svg" /></div>
					</div>
					<div class="home-nav-cart-button">
						<img class="img" src="img/cart.svg" />
						<span class="nav-title-font">Cart</span>
						<span class="cart-font">0</span>
					</div>
				</nav>

				<div class="jumbotron-carousel">
					<img class="img" src="img/carousel-stock1.jpg" />
					<a class="plaque-container" href="#">
						<div class="plaque">
							<span class="plaque-title-font">5 NAMES TO KNOW</span>
							<div class="featured-seller-card-divider"></div>
							<span class="plaque-body-font">Get familiar with these new-to-us labels</span>
							<span class="plaque-link-font">See the Feature</span>
					</div>
					</a>
				</div>

				<div class="featured-under-jumbotron">
					<a class="featured-under-jumbotron-item-anchor" href="#"><div class="featured-under-jumbotron-item">
						<img class="featured-under-jumbotron-item-img" src="#" />
						<div class="featured-under-jumbotron-item-text">
							<span>DIESEL'S DEBUT</span>
							<p>The iconic Italian streetwear label comes to East Dane.</p>
							<span>Shop Now</span>
						</div>
					</div></a>

					<a class="featured-under-jumbotron-item-anchor" href="#"><div class="featured-under-jumbotron-item">
						<img class="featured-under-jumbotron-item-img" src="#" />
						<div class="featured-under-jumbotron-item-text">
							<span>NEW SEASON, NEW KICKS</span>
							<p>Tons of fresh fall sneakers have landed.</p>
							<span>Shop Now</span>
						</div>
					</div> </a>
				</div>

			<div class="more-to-discover">
				<span>MORE TO DISCOVER</span>
				<div class="more-to-discover-item-container">
					<a class="more-to-discover-item" href="#">
						<img class="more-to-discover-item-img" src="#" />
						<span>TOP SELLERS</span>
					</a>
					<a class="more-to-discover-item" href="#">
						<img class="more-to-discover-item-img" src="#" />
						<span>THE BASICS</span>
						</a>
						<a class="more-to-discover-item" href="#">
							<img class="more-to-discover-item-img" src="#" />
							<span>WEAR TO WORK</span>
						</a>
						<a class="more-to-discover-item" href="#">
							<img class="more-to-discover-item-img" src="#" />
							<span>EDITORS' PICKS</span>
						</a>
						<a class="more-to-discover-item" href="#">
							<img class="more-to-discover-item-img" src="#" />
							<span>ACTIVEWEAR</span>
						</a>
				</div>
			</div>

			<div class="featured-sellers-card-section">
				<a class="featured-seller-card" href="#">
					<img class="featured-seller-card-img" src="#" />
					<div class="featured-seller-card-plaque">
							<span>5 NAMES TO KNOW</span>
							<div class="featured-seller-card-divider"></div>
							<span>Get familiar with these new-to-us labels</span>
							<span>See the Feature</span>
					</div>
					</a>
					<a class="featured-seller-card" href="#">
						<img class="featured-seller-card-img" src="#" />
						<div class="featured-seller-card-plaque">
								<span>EAST DANE and GEAR PATROL</span>
								<span>present:</span>
								<span>DENIM THREE WAYS</span>
								<div class="featured-seller-card-divider"></div>
								<span>Get the most out of this wardrobe staple</span>
								<span>See the Feature</span>
						</div>
					</a>
			</div>

			<div class="rewards-and-email-signup-section">
				<a class="signup-section-button" href="#">
					<span>ALL YOURS EAST DANE REWARDS</span>
					<span>SIGN UP AND START RECIEVING PERKS</span>
				</a>
				<a class="signup-section-button" href="#">
					<span><img src="#" />INSIDER INTEL: SIGN UP FOR EMAILS</span>
				</a>
			</div>

			<footer class="footer">
				<div class="footer-info-container">
						<div class="footer-info">
						<h4>Services</h4>
								<a href="#">Customer Service</a>
								<a href="#">Gift Certificates</a>
						</div>
						<div class="footer-info">
							<h4>Information</h4>
								<a href="#">About Us</a>
								<a href="#">Careers</a>
								<a href="#">Affiliate Program</a>
						</div>
						<div class="footer-info">
							<h4>Personalize</h4>
								<a href="#">My Account</a>
								<a href="#">My Loyalty</a>
								<a href="#">My Likes</a>
								<a href="#">My Want List</a>
								<a href="#">My Designers</a>
								<a href="#">My Reviews</a>
						</div>
						<div class="footer-info">
							<h4>Connect</h4>
								<a href="#"><img src="#" />Instagram</a>
								<a href="#"><img src="#" />Facebook</a>
								<a href="#"><img src="#" />Twitter</a>
								<a href="#"><img src="#" />Pinterest</a>
								<a href="#"><img src="#" />Email List</a>
						</div>
						<div class="footer-info">
							<h4>Connect</h4>
								<a href="#"><img src="#" />United States(change)</a>
								<a href="#"><img src="#" />Shipping and Returns</a>
								<a href="#"><img src="#" />Amazon Prime Eligible</a>
						</div>
					</div>
					<div><span>© 1999-2018 BOP LLC. All Rights Reserved.</span> <a href="#">Privacy Notice</a> <a href="#">Terms of Use</a></div>
				</footer>
			</div>
		);
	}
}

export default Home;