import React from 'react';
import imgSrc from '../../constants/imgSrc';

const SubHeading = ({ title }) => {
	return (
		<div className="app__subheading">
			<h3 className="subtitle__font">{title}</h3>
			<img src={imgSrc.spoon} alt="Spoon" className="spoon__img" />
		</div>
	);
};

export default SubHeading;
