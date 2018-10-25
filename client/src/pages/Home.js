import React, {Component} from "react";

class Home extends Component {
	render() {
		return (
			<div className="container">
				<div className="top-bar">
					<div className="announcement-container">
						<span className="title-font">FREE 3-day shippping and FREE returns | Amazon Prime Eligible</span>
					</div>
				</div>

				<div className="logo-container">
					<h1 className="logo-font">West Indigo</h1>
				</div>

				<nav className="home-menu-bar">
					<div className="home-nav-location-button">
						<img className="icon" src="img/location-icon.svg" />
						<div className="text-container">
							<span className="nav-body-font">Deliver to Name</span>
							<span className="nav-title-font">Fanwood 07023</span>
						</div>
					</div>
					<div className="home-nav-search-bar">
						<div className="home-nav-search-filter-button">
								<span className="nav-font-white">All</span>
								<img className="img" src="img/arrow-down-white.svg" />
						</div>
						<input type="text" className="home-nav-search-text-input"></input>
						<div className="home-nav-search-submit-button"><input type="submit" class="icon" value=""></input></div>
					</div>
					<div className="home-nav-language-dropdown">
						<span className="nav-body-font">EN</span>
						<img className="img" src="img/arrow-down.svg" />
					</div>
					<div className="home-nav-div-bar"></div>
					<div className="home-nav-account-dropdown">
						<span className="nav-body-font">Hello, Name</span>
						<div className="bottom-container"><span className="nav-title-font">Account & Lists</span><img className="img" src="img/arrow-down.svg" /></div>
					</div>
					<div className="home-nav-orders-dropdown">
						<div className="bottom-container"><span className="nav-title-font">Orders</span><img className="img" src="img/arrow-down.svg" /></div>
					</div>
					<div className="home-nav-cart-button">
						<img className="img" src="img/cart.svg" />
						<span className="nav-title-font">Cart</span>
						<span className="cart-font">0</span>
					</div>
				</nav>

				<div className="jumbotron-carousel">
					<img className="img" src="img/carousel-stock1.jpg" />
					<a className="plaque-container" href="#">
						<div className="plaque">
							<span className="plaque-title-font">5 NAMES TO KNOW</span>
							<div className="featured-seller-card-divider"></div>
							<span className="plaque-body-font">Get familiar with these new-to-us labels</span>
							<span className="plaque-link-font">See the Feature</span>
					</div>
					</a>
				</div>

				<div className="featured-under-jumbotron">
					<a className="featured-under-jumbotron-item-anchor" href="#"><div className="featured-under-jumbotron-item">
						<img className="featured-under-jumbotron-item-img" src="#" />
						<div className="featured-under-jumbotron-item-text">
							<span>DIESEL'S DEBUT</span>
							<p>The iconic Italian streetwear label comes to East Dane.</p>
							<span>Shop Now</span>
						</div>
					</div></a>

					<a className="featured-under-jumbotron-item-anchor" href="#"><div className="featured-under-jumbotron-item">
						<img className="featured-under-jumbotron-item-img" src="#" />
						<div className="featured-under-jumbotron-item-text">
							<span>NEW SEASON, NEW KICKS</span>
							<p>Tons of fresh fall sneakers have landed.</p>
							<span>Shop Now</span>
						</div>
					</div> </a>
				</div>

			<div className="more-to-discover">
				<span>MORE TO DISCOVER</span>
				<div className="more-to-discover-item-container">
					<a className="more-to-discover-item" href="#">
						<img className="more-to-discover-item-img" src="#" />
						<span>TOP SELLERS</span>
					</a>
					<a className="more-to-discover-item" href="#">
						<img className="more-to-discover-item-img" src="#" />
						<span>THE BASICS</span>
						</a>
						<a className="more-to-discover-item" href="#">
							<img className="more-to-discover-item-img" src="#" />
							<span>WEAR TO WORK</span>
						</a>
						<a className="more-to-discover-item" href="#">
							<img className="more-to-discover-item-img" src="#" />
							<span>EDITORS' PICKS</span>
						</a>
						<a className="more-to-discover-item" href="#">
							<img className="more-to-discover-item-img" src="#" />
							<span>ACTIVEWEAR</span>
						</a>
				</div>
			</div>

			<div className="featured-sellers-card-section">
				<a className="featured-seller-card" href="#">
					<img className="featured-seller-card-img" src="#" />
					<div className="featured-seller-card-plaque">
							<span>5 NAMES TO KNOW</span>
							<div className="featured-seller-card-divider"></div>
							<span>Get familiar with these new-to-us labels</span>
							<span>See the Feature</span>
					</div>
					</a>
					<a className="featured-seller-card" href="#">
						<img className="featured-seller-card-img" src="#" />
						<div className="featured-seller-card-plaque">
								<span>EAST DANE and GEAR PATROL</span>
								<span>present:</span>
								<span>DENIM THREE WAYS</span>
								<div className="featured-seller-card-divider"></div>
								<span>Get the most out of this wardrobe staple</span>
								<span>See the Feature</span>
						</div>
					</a>
			</div>

			<div className="rewards-and-email-signup-section">
				<a className="signup-section-button" href="#">
					<span>ALL YOURS EAST DANE REWARDS</span>
					<span>SIGN UP AND START RECIEVING PERKS</span>
				</a>
				<a className="signup-section-button" href="#">
					<span><img src="#" />INSIDER INTEL: SIGN UP FOR EMAILS</span>
				</a>
			</div>

			<footer className="footer">
				<div className="footer-info-container">
						<div className="footer-info">
						<h4>Services</h4>
								<a href="#">Customer Service</a>
								<a href="#">Gift Certificates</a>
						</div>
						<div className="footer-info">
							<h4>Information</h4>
								<a href="#">About Us</a>
								<a href="#">Careers</a>
								<a href="#">Affiliate Program</a>
						</div>
						<div className="footer-info">
							<h4>Personalize</h4>
								<a href="#">My Account</a>
								<a href="#">My Loyalty</a>
								<a href="#">My Likes</a>
								<a href="#">My Want List</a>
								<a href="#">My Designers</a>
								<a href="#">My Reviews</a>
						</div>
						<div className="footer-info">
							<h4>Connect</h4>
								<a href="#"><img src="#" />Instagram</a>
								<a href="#"><img src="#" />Facebook</a>
								<a href="#"><img src="#" />Twitter</a>
								<a href="#"><img src="#" />Pinterest</a>
								<a href="#"><img src="#" />Email List</a>
						</div>
						<div className="footer-info">
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