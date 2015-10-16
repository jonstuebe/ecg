import React, { Component } from 'react'
import classNames from "classnames"

import styles from "./SocialLink.scss"

class SocialLink extends Component {

	constructor(props, context) {
		super(props);
		this.state = {};

	}

	render() {
		var classes = [ this.props.className ];

		switch (this.props.type) {
			case 'facebook':
				classes.push(this.props.className + '--' + 'facebook');
				break;
			case 'email':
				classes.push(this.props.className + '--' + 'email');
				break;
		}

		return (
			<a href="#" className={classNames(classes)}>{this.props.type}</a>
		)
	}
}

export default SocialLink

SocialLink.defaultProps = {
	className: 'social-link',
	type: 'facebook'
}