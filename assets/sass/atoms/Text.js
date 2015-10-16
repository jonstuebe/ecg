import React, { Component } from 'react'
import classNames from "classnames"

import styles from "./Text.scss"

class Text extends Component {

	constructor(props, context) {
		super(props);
		this.state = {};
	}

	render() {
		var classes = [];

		var $element = React.createElement(this.props.type, { className: classNames(classes), dangerouslySetInnerHTML: { __html: this.props.content } });

		return (
			<div className="content-area">
				{$element}
			</div>
		)
	}
}

Text.defaultProps = {
	type: 'p',
	content: 'Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
}

export default Text