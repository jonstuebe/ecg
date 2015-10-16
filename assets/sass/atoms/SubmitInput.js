import React, { Component } from 'react'
import classNames from "classnames"

import styles from "./SubmitInput.scss"

class SubmitInput extends Component {

	constructor(props, context) {
		super(props);
	}

	render() {
		var classes = [ this.props.className ];
		return (
			<input type="submit" className={classNames(classes)} value={this.props.value} />
		)
	}
}

export default SubmitInput

SubmitInput.defaultProps = {
	className: 'submit-input',
	value: 'Submit'
}