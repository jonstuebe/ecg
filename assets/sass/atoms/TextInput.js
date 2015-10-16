import React, { Component } from 'react'
import classNames from "classnames"

import styles from "./TextInput.scss"

class TextInput extends Component {

	constructor(props, context) {
		super(props);
	}

	render() {
		var classes = [ this.props.className ];
		return (
			<input type="text" placeholder={this.props.placeholder} className={classNames(classes)} />
		)
	}
}

export default TextInput

TextInput.defaultProps = {
	className: 'text-input',
	placeholder: 'Name'
}

// <input type="text" class="text-input" placeholder="Name" />