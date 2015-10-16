import React, { Component } from 'react'
import classNames from "classnames"

import styles from "./NavItem.scss"

class NavItem extends Component {

	constructor(props, context) {
		super(props);
		this.state = { classes: [ "nav-item" ], active: false };
	}

	_handleClick(e) {

		var classes = this.state.classes;
		var activeClass = 'is-active';
		var index = classes.indexOf(activeClass);

		if(this.state.active)
		{
			classes.splice(index, 1);
			this.setState({ active: false, classes: classes });
		}
		else
		{
			if(index != -1)
			{
				classes.splice(index, 1);
			}
			else
			{
				classes.push(activeClass);
			}

			this.setState({ active: true, classes: classes });
		}

		e.preventDefault();
	}

	render() {
		var classes = classNames(this.state.classes);
		return (
			<li className={classes}>
				<a href="#" onClick={this._handleClick.bind(this)}>{this.props.label}</a>
			</li>
		)
	}
}

export default NavItem