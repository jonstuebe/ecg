import React, { Component } from 'react'

import styles from "./Molecule.scss"

class Molecule extends Component {
	render() {
		
		const name = this.props['molecule-name'];
		const label = this.props['molecule-label'];

		var children = this.props.children;
		var $element;

		if(children)
		{
			$element = children;
		}
		else
		{
			const element = require("../molecules/" + name);
			const props = JSON.parse(JSON.stringify(this.props));

			delete props['molecule-name'];
			delete props['molecule-label'];

			$element = React.createElement(element, props);
		}		

		const _label = (label) ? (' (' + label + ')') : '';

		return (
			<div className="molecule-item">
				<h2 className="molecule-item__name">{name + _label}</h2>
				<div className="molecule-item__element">
					{$element}
				</div>
			</div>
		)
	}
}

export default Molecule