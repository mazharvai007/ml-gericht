import React from 'react';
import './footer.css';
import { imgSrc } from '../../constants';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SlSocialTwitter } from 'react-icons/sl';

const Footer = () => {
	return (
		<div className="app__footer app__bg flex__center">
			<div className="app__footer-contentWrap">
				<div className="app__footer-content__block">
					<h4 className="subtitle__font">Contact Us</h4>
					<p className="p__font">
						9 W 53rd St, New York, NY 10019, USA
					</p>

					<div className="info">
						<p className="p__font">+1 212-344-1230</p>
						<p className="p__font">+1 212-555-1230</p>
					</div>
				</div>
				<div className="app__footer-content__block">
					<img
						src={imgSrc.gericht}
						alt="Gericth"
						className="footer__logo"
					/>
					<p className="p__font">
						"The best way to find yourself is to lose yourself in
						the service of others.”
					</p>

					<img src={imgSrc.spoon} alt="spoon" />

					<div className="social">
						<FaFacebookF color="#fff" fontSize={24} />
						<SlSocialTwitter color="#fff" fontSize={24} />
						<FaInstagram color="#fff" fontSize={24} />
					</div>
				</div>
				<div className="app__footer-content__block">
					<h4 className="subtitle__font">Working Hours</h4>

					<div className="info">
						<p className="p__font">
							Monday-Friday: 08:00 am -12:00 am
						</p>
						<p className="p__font">
							Saturday-Sunday: 07:00am -11:00 pm
						</p>
					</div>
				</div>
			</div>

			<div className="app__footer-copyright">
				<p className="p__font">2024 Gerícht. All Rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
