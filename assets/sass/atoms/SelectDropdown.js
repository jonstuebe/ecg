import React, { Component } from 'react'
import classNames from "classnames"

import styles from "./SelectDropdown.scss"

class SelectDropdown extends Component {

	constructor(props, context) {
		super(props);
		this.state = { value: this.props.value };
	}

	_handleChange(e) {
		this.setState({ value: e.target.value });
	}

	render() {
		var classes = [ this.props.className ];
		return (
			<div className={classNames(classes)}>
				<select value={this.state.value} onChange={this._handleChange.bind(this)}>
					<option value="">Purpose</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
			</div>
		)
	}
}

export default SelectDropdown

SelectDropdown.defaultProps = {
	className: 'select-dropdown',
	value: ''
}

// <div class="select-dropdown">
// 	<select>
// 		<option selected value="">Purpose</option>
// 		<option value="1">One</option>
// 		<option value="2">Two</option>
// 		<option value="3">Three</option>
// 	</select>
// </div>