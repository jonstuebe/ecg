import React, { Component } from 'react'
import { Link } from "react-router";
import classNames from "classnames"

import styles from "./SgNav.scss"

import SgLink from "../atoms/SgLink"

class SgNav extends Component {

	constructor(props, context) {
		super(props);
		this.state = {};
	}

	render() {
		var classes = classNames(this.props.classes);
		return (
			<div>
				<div className={this.props.classes[0] + '__push'}></div>
				<div className={classes}>
					<ul>
						<SgLink path='/' value='Home' />
						<SgLink path='/atoms' value='Atoms' />
						<SgLink path='/molecules' value='Molecules' />
						<SgLink path='/organisms' value='Organisms' />
					</ul>
				</div>
			</div>
		)
	}
}

export default SgNav

SgNav.defaultProps = {
	classes: [ "sg-nav" ]
}