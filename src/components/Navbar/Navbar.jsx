import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import imgSrc from '../../constants/imgSrc';
import './navbar.css';
import data from '../../constants/data';

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<a href="/">
					<img src={imgSrc.gericht} alt="gericht logo" />
				</a>
			</div>

			<ul className="app__navbar-links">
				{data.navItems.map((navItem, index) => (
					<li key={navItem.title + index} className="p__font">
						<a href={navItem.link}>{navItem.title}</a>
					</li>
				))}
			</ul>

			<div className="app__navbar-login">
				<a className="p__font" href="/">
					Log in / registration
				</a>
				<div className="line"></div>
				<a className="p__font" href="/">
					Book Table
				</a>
			</div>

			<div className="app__navbar-smallscreen">
				<GiHamburgerMenu
					color="#fff"
					fontSize={27}
					onClick={() => setToggleMenu(true)}
				/>

				{toggleMenu && (
					<div className="app__navbar-smallscreen__overlay flex__center scale-up-tr">
						<MdOutlineRestaurantMenu
							fontSize={27}
							className="overlay__close"
							onClick={() => setToggleMenu(false)}
						/>
						<ul className="app__navbar-smallscreen__links">
							{data.navItems.map((navItem, index) => (
								<li
									key={navItem.title + index}
									className="p__font"
								>
									<a href={navItem.link}>{navItem.title}</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
