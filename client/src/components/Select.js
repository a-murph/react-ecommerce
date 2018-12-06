import React, {Component} from "react";

class Select extends Component {
	state = {
		current: "",
		previous: ""
	};

	showDropdown = event => {
		event.target.nextSibling.classList.toggle("hidden");
	};

	changeSelection = event => {
		event.persist();

		let prev = event.target.parentElement.previousSibling.textContent;
		let next = event.target.textContent;

		this.setState({
			current: next,
			previous: prev
		}, () => {
			event.target.textContent = prev;
			event.target.parentElement.classList.toggle("hidden");
			this.props.handleChange({
				target: {
					name: "dropdown",
					value: this.state.current
				}
			});
		});
	};

	componentDidMount() {
		this.setState({
			current: this.props.default
		});
	};

	render() {
		return (
			<div className="dropdown">
				<div className="dropdown-selection" onClick={this.showDropdown}>
					{this.state.current}
				</div>
				<div className="dropdown-content hidden">
					{this.props.options.map((option, index) => {
						return <div key={index} onClick={this.changeSelection}>{option}</div>
					})}
				</div>
			</div>
		);
	};
};

export default Select;