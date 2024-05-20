import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

const Heading = ({ subTitle, title }) => {
	return (
		<div className="app__heading">
			<SubHeading title={subTitle} />
			<h2 className="heading__font-h2">{title}</h2>
		</div>
	);
};

export default Heading;
