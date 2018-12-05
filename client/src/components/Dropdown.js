import React, {Component} from "react";

class Dropdown extends Component {
	state = {
		current: "",
		previous: ""
	}

	showDropdown = () => {
		document.getElementById("dropdown-options").classList.toggle("hidden");
	}

	render() {
		return (
			<div className="dropdown">
				<div id="dropdown-selection" onClick={this.showDropdown}>
					All
				</div>
				<div id="dropdown-options" className="dropdown-content hidden">
					<div>Electronics</div>
					<div>Media</div>
					<div>Clothing</div>
					<div>Health & Beauty</div>
					<div>Home</div>
				</div>
			</div>
		);
	};
};

export default Dropdown;