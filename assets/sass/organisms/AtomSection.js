import React, { Component } from 'react'

import styles from './AtomSection.scss'
import Heading from '../atoms/Heading'

class AtomSection extends Component {

	render() {
		var atoms = this.props.children;

		return <div className='atom-section'>
			<h2 className='atom-section__title'>{this.props.title}</h2>
			{atoms}
		</div>
	}

}

export default AtomSection