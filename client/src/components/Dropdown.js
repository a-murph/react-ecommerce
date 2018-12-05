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
			current: this.props.default
		});
	};

	render() {
		return (
			<div className="dropdown" onMouseEnter={this.props.mouseType === "hover" ? this.showDropdown : ""} onMouseLeave={this.props.mouseType === "hover" ? this.showDropdown : ""}>
				<div id="dropdown-selection" onClick={this.props.mouseType !== "hover" ? this.showDropdown : ""}>
					{this.state.current}
				</div>
				<div id="dropdown-options" className="dropdown-content hidden">
					{this.props.options.map((option, index) => {
						return <div key={index} onClick={this.changeSelection}>{option}</div>
					})}
				</div>
			</div>
		);
	};
};

export default Dropdown;