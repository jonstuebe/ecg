import React, { Component } from 'react'
import classNames from "classnames"

import styles from "./GridItem.scss"

class GridItem extends Component {

	constructor(props, context) {
		super(props);
		this.state = {};
	}

	render() {
		var classes = [ this.props.className ];
		var filters = [];

		if(this.props.location) filters.push('filter--' + this.props.location);
		if(this.props.specialty) filters.push('filter--' + this.props.specialty);
		// classes = classes.push(...filters);
		classes = [...classes, ...filters];

		return <div className={classNames(classes)}>
			<div className={this.props.className + '__inner'}>
				{this.props.children}
			</div>
		</div>
	}
}

GridItem.defaultProps = {
	className: 'grid-item',
	location: null,
	specialty: null
}

export default GridItem