import React, { Component } from "react";
import {Link} from "react-router-dom";
import SearchBar from "../components/SearchBar";

class Home extends Component {
	render() {
		return (
			<div className="container">
				<div className="top-bar">
					<div className="announcement-container">
						<span className="banner-font">FREE 3-day shippping and FREE returns | <i className="fab fa-amazon"></i> Amazon Prime Eligible</span>
					</div>
				</div>

				<div className="logo-container">
					<img alt="" className="img" src="img/logo2.svg" />
				</div>

				<nav className="home-menu-bar">
					<div className="home-nav-menu-container">
						<div className="text-container">
							<div className="home-nav-menu-button"><i className="fas fa-bars"></i></div>
							<span className="nav-title-font">Login/Signup</span>
						</div>
					</div>
					<SearchBar page="home" />
					<div className="home-nav-account-dropdown">
						<div className="bottom-container"><span className="nav-title-font">Account & Lists</span><i className="fas fa-sort-down nav-icon"></i></div>
					</div>
					<div className="home-nav-orders-dropdown">
						<div className="bottom-container"><span className="nav-title-font">Orders</span><i className="fas fa-sort-down nav-icon"></i></div>
					</div>
					<div className="home-nav-cart-button">
						<img alt="" className="img" src="img/shopping-cart-solid.svg"/>
						<span className="nav-title-font">Cart</span>
					</div>
				</nav>

				<div className="jumbotron-carousel">
					<img alt="" className="img" src="img/index/carousel-stock1.jpg" />
					<a className="plaque-container" href="##">
						<div className="plaque">
							<span className="plaque-title-font">5 NAMES TO KNOW</span>
							<div className="featured-seller-card-divider"></div>
							<span className="plaque-body-font">Get familiar with these new-to-us labels</span>
							<span className="plaque-link-font">See the Feature</span>
						</div>
					</a>
				</div>

				<div className="featured-under-jumbotron">
					<a className="featured-under-jumbotron-item-anchor" href="##"><div className="featured-under-jumbotron-item">
						<img alt="" className="featured-under-jumbotron-item-img" src="img/index/1.jpg" />
						<div className="featured-under-jumbotron-item-text">
							<span className="underjumbo-title-font">ABITI'S DEBUT</span>
							<p className="underjumbo-body-font">The iconic Italian streetwear label comes to West Indigo.</p>
							<span className="underjumbo-link-font">Shop Now</span>
						</div>
					</div></a>

					<a className="featured-under-jumbotron-item-anchor" href="##"><div className="featured-under-jumbotron-item">
						<img alt="" className="featured-under-jumbotron-item-img" src="img/index/3.jpg" />
						<div className="featured-under-jumbotron-item-text">
							<span className="underjumbo-title-font">URBAN JUNGLE</span>
							<p className="underjumbo-body-font">Green is in for home decor every season.</p>
							<span className="underjumbo-link-font">Shop Now</span>
						</div>
					</div> </a>
				</div>

				<div className="more-to-discover">
					<span className="discover-title-font">SEE OUR LATEST DEALS IN</span>
					<div className="more-to-discover-item-container">
						<Link className="more-to-discover-item" to="/search?s=&c=Clothing&o=low-high">
							<img alt="" className="more-to-discover-item-img" src="img/index/c.png" />
							<span className="more-to-discover-text discover-font">CLOTHING</span>
						</Link>
						<Link className="more-to-discover-item" to="/search?s=&c=Electronics&o=low-high">
							<img alt="" className="more-to-discover-item-img" src="img/index/e.jpg" />
							<span className="more-to-discover-text discover-font">ELECTRONICS</span>
						</Link>
						<Link className="more-to-discover-item" to="/search?s=&c=HealthandBeauty&o=low-high">
							<img alt="" className="more-to-discover-item-img" src="img/index/a.jpg" />
							<span className="more-to-discover-text discover-font">HEALTH AND BEAUTY</span>
						</Link>
						<Link className="more-to-discover-item" to="/search?s=&c=Home&o=low-high">
							<img alt="" className="more-to-discover-item-img" src="img/index/b.png" />
							<span className="more-to-discover-text discover-font">HOME</span>
						</Link>
						<Link className="more-to-discover-item" to="/search?s=&c=Media&o=low-high">
							<img alt="" className="more-to-discover-item-img" src="img/index/d.jpg" />
							<span className="more-to-discover-text discover-font">MEDIA</span>
						</Link>
					</div>
				</div>

				<div className="featured-sellers-card-section">
					<a className="featured-seller-card" href="##">
						<img alt="" className="featured-seller-card-img" src="img/index/2.jpg" />
						<div className="featured-seller-card-plaque">
							<span className="plaque-title-font">NEW SEASON, NEW KICKS</span>
							<div className="featured-seller-card-divider"></div>
							<span className="plaque-body-font">Tons of fresh sneakers have landed.</span>
							<span className="plaque-link-font">See the Feature</span>
						</div>
					</a>
					<a className="featured-seller-card" href="##">
						<img alt="" className="featured-seller-card-img" src="img/index/4.jpg" />
						<div className="featured-seller-card-plaque">
							<span className="plaque-title-font">WEST INDIGO and JANE DOE</span>
							<span className="plaque-body-font">present:</span>
							<span className="plaque-title-font">CARTAS MAGICAS</span>
							<div className="featured-seller-card-divider"></div>
							<span className="plaque-body-font">Get the latest edition of the popular series</span>
							<span className="plaque-link-font">See the Feature</span>
						</div>
					</a>
				</div>

				<div className="rewards-and-email-signup-section">
					<a className="signup-section-button" href="##">
						<span className="signup-title-font">ALL YOUR WEST INDIGO REWARDS</span> <br />
						<span className="signup-body-font">SIGN UP AND START RECIEVING PERKS</span>
					</a>
					<a className="signup-section-button" href="##">
						<span className="signup-body-font"> <i className="far fa-envelope"></i> INSIDER INTEL: SIGN UP FOR EMAILS</span>
					</a>
				</div>

				<footer className="footer">
					<div className="footer-info-container">
						<div className="footer-info">
							<h4 className="footer-title-font">Services</h4>
							<a className="footer-body-font" href="##">Customer Service</a>
							<a className="footer-body-font" href="##">Gift Certificates</a>
						</div>
						<div className="footer-info">
							<h4 className="footer-title-font">Information</h4>
							<a className="footer-body-font" href="##">About Us</a>
							<a className="footer-body-font" href="##">Careers</a>
							<a className="footer-body-font" href="##">Affiliate Program</a>
						</div>
						<div className="footer-info">
							<h4 className="footer-title-font">Personalize</h4>
							<a className="footer-body-font" href="##">My Account</a>
							<a className="footer-body-font" href="##">My Loyalty</a>
							<a className="footer-body-font" href="##">My Likes</a>
							<a className="footer-body-font" href="##">My Want List</a>
							<a className="footer-body-font" href="##">My Designers</a>
							<a className="footer-body-font" href="##">My Reviews</a>
						</div>
						<div className="footer-info">
							<h4 className="footer-title-font">Connect</h4>
							<a className="footer-body-font" href="##"><i className="fab fa-instagram"></i> Instagram</a>
							<a className="footer-body-font" href="##"><i className="fab fa-facebook-f"></i> Facebook</a>
							<a className="footer-body-font" href="##"><i className="fab fa-twitter"></i> Twitter</a>
							<a className="footer-body-font" href="##"><i className="fab fa-pinterest"></i> Pinterest</a>
							<a className="footer-body-font" href="##"><i className="far fa-envelope"></i> Email List</a>
						</div>
						<div className="footer-info">
							<h4 className="footer-title-font">Connect</h4>
							<a className="footer-body-font" href="##"><i className="fas fa-globe"></i> United States(change)</a>
							<a className="footer-body-font" href="##"><i className="fas fa-shipping-fast"></i> Shipping and Returns</a>
							<a className="footer-body-font" href="##"><i className="fab fa-amazon"></i> Amazon Prime Eligible</a>
						</div>
					</div>
					<div><span className="footer-body-font">© Andrew J. Murphy All Rights Reserved.</span> <a className="footer-title-font" href="##">Privacy Notice</a> <a className="footer-title-font" href="##">Terms of Use</a></div>
				</footer>

			</div>
		);
	}
}

export default Home;