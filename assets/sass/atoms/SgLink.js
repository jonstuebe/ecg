import React, { Component } from 'react'
import { Link } from "react-router";
import classNames from "classnames"

import styles from "./SgLink.scss"

class SgLink extends Component {

	constructor(props, context) {
		super(props);
		this.state = { classes: [ "sg-link" ], active: false };
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
			<li className={classes} onClick={this._handleClick.bind(this)}>
				<Link to={this.props.path}>{this.props.value}</Link>
			</li>
		)
	}
}

export default SgLink