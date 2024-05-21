import React from 'react';
import './findUs.css';
import imgSrc from '../../constants/imgSrc';
import { Heading } from '../../components';

const FindUs = () => {
	return (
		<div className="app__findUs app__bg section__padding flex__center">
			<div className="app__findUs-contentWrap">
				<Heading subTitle="Contact" title="Find Us" />
				<div className="app__findUs-content__findUsInfo"></div>
			</div>

			<div className="app__findUs-findUsWorld">
				<img src={imgSrc.findUs} alt="findUs" />
			</div>
		</div>
	);
};

export default FindUs;
