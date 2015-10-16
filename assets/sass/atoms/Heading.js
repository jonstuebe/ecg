import React, { Component } from 'react'
import classNames from "classnames"

import styles from "./Heading.scss"

class Heading extends Component {

	constructor(props, context) {
		super(props);
		this.state = {};
	}

	render() {
		var classes = [ this.props.className ];

		switch (this.props.type) {
			case 'h1':
				classes.push('heading--lg');
				break;
			case 'h2':
				classes.push('heading--md');
				break;
			case 'h3':
				classes.push('heading--sm');
				break;
			case 'h4':
				classes.push('heading--xs');
				break;
		}

		var $element = React.createElement(this.props.type, { className: classNames(classes) }, this.props.content);

		return $element
	}
}

Heading.defaultProps = {
	type: 'h1',
	content: 'About Us',
	className: 'heading'
}

export default Heading