import { Component, createRef } from "react";

import "./Dropdown.css";

export default class Dropdown extends Component {
	constructor(props) {
		super(props);

		this.selectRef = createRef();

		this.state = {
			selectedValue: this.props.selectedValue ? this.props.selectedValue : this.props.options[0],
			options: this.props.options,
			isArrowRotated: false
		};
	}

	resetSelectedValue = () => {
		this.selectRef.current.selectedIndex = 0;
	};

	render() {
		return (
			<div className="ui-select">
				<select
					ref={this.selectRef}
					onClick={() => {
						this.setState({ isArrowRotated: !this.state.isArrowRotated });
					}}
					onBlur={() => {
						this.setState({ isArrowRotated: false });
					}}
					onChange={(e) => {
						this.setState({ selectedValue: e.target.value },
							() => {
								this.props.onChange(e, this.state.selectedValue);
							});
					}}
				>
					{
						Object.keys(this.state.options).map((opt, index) => {
							return <option key={index} value={this.state.options[opt]}>{opt}</option>;
						}
						)
					}
				</select>
				<div className="ui-select-arrow">
					<i
						style={{ transform: this.state.isArrowRotated ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%) rotate(360deg)' }}
						className="fa fa-caret-down"
					/>
				</div>
			</div>
		);
	}
}