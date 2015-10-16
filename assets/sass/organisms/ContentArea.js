import React, { Component } from 'react'

class ContentArea extends Component {
	render() {
		var items = this.props.items;
		console.log(items);
		return (
			<div className="content-area">
				{items.map(function(map) {
					return {result}
				})}
			</div>
		)
	}
}

export default ContentArea