import React, {Component} from "react";

class Dropdown extends Component {
	showDropdown = event => {
		event.target.parentElement.nextSibling.classList.toggle("hidden");
	}

	render() {
		return (
			<div>
				<div className="nav-dropdown">
					<span className="nav-title-font" onClick={this.showDropdown}>
						{this.props.title}
					</span>
					<i className="fas fa-sort-down nav-icon"></i>
				</div>
				<div className="hidden">
					<div className="dropdown-box">
						{this.props.list.map((item, index) => {
							return (
								<div className="dropdown-content home-nav-title-font" key={index}>
									<a href="##">{item}</a>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	};
};

export default Dropdown;