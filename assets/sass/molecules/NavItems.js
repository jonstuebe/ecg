import React, { Component } from 'react'
import NavItem from "../atoms/NavItem";

class NavItems extends Component {
	render() {
		return (
			<div className="nav-items">
				<ul>
					<NavItem label="Home" />
					<NavItem label="Services" />
					<NavItem label="Markets" />
					<NavItem label="Team" />
					<NavItem label="Approach" />
					<NavItem label="About Us" />
					<NavItem label="Contact Us" />
				</ul>
			</div>
		)
	}
}

export default NavItems