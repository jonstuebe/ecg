import React, { Component } from 'react'
import classNames from "classnames"

import styles from "./GridItemImage.scss"

class GridItemImage extends Component {

	constructor(props, context) {
		super(props);
		this.state = {};
	}

	render() {
		var classes = [ this.props.className ];

		return <div className={classNames(classes)}>
			<img src={this.props.img} />
		</div>
	}
}

GridItemImage.defaultProps = {
	className: 'grid-item__image',
	img: 'https://placeimg.com/800/800/arch'
}

export default GridItemImage