import React from 'react';

import imgSrc from '../../constants/imgSrc';
import './header.css';
import SubHeading from '../../components/SubHeading/SubHeading';
import Button from '../../components/Button/Button';

const Header = () => {
	return (
		<div className="app__header app__wrapper section__padding" id="#home">
			<div className="app__wrapper-info">
				<SubHeading title="Chase the new Flavour" />
				<h1 className="heading__font-h1">The key to Fine dining</h1>
				<p className="p__font">
					Sit tellus lobortis sed senectus vivamus molestie.
					Condimentum volutpat morbi facilisis quam scelerisque
					sapien. Et, penatibus aliquam amet tellus{' '}
				</p>

				<Button title="Explore Menu" type="button" />
			</div>
			<div className="app__wrapper-image">
				<img src={imgSrc.welcome} alt="Welcome to Gericht" />
			</div>
		</div>
	);
};

export default Header;
