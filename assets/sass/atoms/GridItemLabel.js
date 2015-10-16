import React, { Component } from 'react'
import classNames from "classnames"

import styles from "./GridItemLabel.scss"

class GridItemLabel extends Component {

	constructor(props, context) {
		super(props);
		this.state = {};
	}

	render() {
		var classes = [ this.props.className ];
		var el;

		if(this.props.name != '' && this.props.sector != '')
		{
			el = (<div className={this.props.className + '__children'}>
				<p>{this.props.name}</p>
				<p className={this.props.className + '__title'}>{this.props.title}</p>
				<p>{this.props.sector}</p>
			</div>)
		}
		else
		{
			el = (<h2 className={this.props.className + '__title' + ' ' + this.props.className + '__title--centered'}>{this.props.title}</h2>);
			classes.push('has-centered');
		}

		return <div className={classNames(classes)}>
			{(el.children) ? el.children : el}
		</div>
	}
}

GridItemLabel.defaultProps = {
	className: 'grid-item-label',
	name: '',
	title: 'Director',
	sector: ''
}

export default GridItemLabel