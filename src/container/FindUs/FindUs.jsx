import React from 'react';
import './findUs.css';
import imgSrc from '../../constants/imgSrc';
import { Button, Heading } from '../../components';

const FindUs = () => {
	return (
		<div
			className="app__findUs app__bg section__padding flex__center"
			id="contact"
		>
			<div className="app__findUs-contentWrap">
				<Heading subTitle="Contact" title="Find Us" />
				<div className="app__findUs-content__findUsInfo">
					<p className="p__font">
						Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9
						7SG
					</p>

					<div className="app__findUs-openingHour">
						<h4 className="subtitle__font">Opening Hours</h4>
						<p className="p__font">
							Mon - Fri: 10:00 am - 02:00 am
						</p>
						<p className="p__font">
							Sat - Sun: 10:00 am - 03:00 am
						</p>
					</div>

					<Button title="Visit Us" type="button" />
				</div>
			</div>

			<div className="app__findUs-findUsWorld">
				<img src={imgSrc.findUs} alt="findUs" />
			</div>
		</div>
	);
};

export default FindUs;
