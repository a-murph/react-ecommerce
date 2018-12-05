import React, {Component} from "react";

class Dropdown extends Component {
	state = {
		current: "",
		previous: ""
	};

	showDropdown = () => {
		document.getElementById("dropdown-options").classList.toggle("hidden");
	};

	changeSelection = event => {
		event.persist();

		let prev = document.getElementById("dropdown-selection").textContent;
		let next = event.target.textContent;

		this.setState({
			current: next,
			previous: prev
		}, () => {
			event.target.textContent = prev
		});
	};

	componentDidMount() {
		this.setState({
			current: "All"
		});
	};

	render() {
		return (
			<div className="dropdown">
				<div id="dropdown-selection" onClick={this.showDropdown}>
					{this.state.current}
				</div>
				<div id="dropdown-options" className="dropdown-content hidden">
					<div onClick={this.changeSelection}>Electronics</div>
					<div onClick={this.changeSelection}>Media</div>
					<div onClick={this.changeSelection}>Clothing</div>
					<div onClick={this.changeSelection}>Health & Beauty</div>
					<div onClick={this.changeSelection}>Home</div>
				</div>
			</div>
		);
	};
};

export default Dropdown;