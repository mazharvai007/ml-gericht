import React from 'react';

import images from '../../constants/images';
import './navbar.css';
import data from '../../constants/data';

const Navbar = () => {
	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.gericht} alt="gericht logo" />
			</div>

			<ul className="app__navbar-links">
				{data.navItems.map((navItem, index) => (
					<li key={navItem.title + index} className="p__font">
						<a href={navItem.link}>{navItem.title}</a>
					</li>
				))}
			</ul>

			<div className="app__navbar-login">
				<a className="p__font">
					Log in / registration
				</a>
				<div className="line"></div>
				<a className="p__font" href="#">
					Book Table
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
