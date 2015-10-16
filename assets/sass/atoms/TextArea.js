import React, { Component } from 'react'
import classNames from "classnames"

import styles from "./TextArea.scss"

class TextArea extends Component {

	constructor(props, context) {
		super(props);
	}

	render() {
		var classes = [ this.props.className ];
		return (
			<textarea placeholder={this.props.placeholder} className={classNames(classes)}>
			</textarea>
		)
	}
}

export default TextArea

TextArea.defaultProps = {
	className: 'text-area',
	placeholder: 'Messages'
}