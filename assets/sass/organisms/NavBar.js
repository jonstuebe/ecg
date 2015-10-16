import React, { Component } from 'react'

import Logo from "../atoms/Logo";
import NavItems from "../molecules/NavItems";

class NavBar extends Component {
	render() {
		return (
			<div className="nav-bar">
				<Logo />
				<NavItems />
			</div>
		)
	}
}

export default NavBar