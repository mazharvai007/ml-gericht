import React from 'react';
import imgSrc from '../../constants/imgSrc';
import './about.css';
import Button from '../../components/Button/Button';

const About = () => {
	return (
		<div className="app__about section__padding app__bg flex__center">
			<div className="app__about-content__overlay flex__center">
				<img src={imgSrc.G} alt="G" />
			</div>
			<div className="app__about-content">
				<div className="app__about-content__inner">
					<h2 className="heading__font-h2">About Us</h2>
					<img
						src={imgSrc.spoon}
						alt="Spoon"
						className="spoon__img"
					/>
					<p className="p__font">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quis pharetra adipiscing ultrices vulputate posuere
						tristique. In sed odio nec aliquet eu proin mauris et.
					</p>
					<Button title="Know More" />
				</div>
				<div className="app__about-content__middle">
					<img src={imgSrc.knife} alt="Knife" />
				</div>
				<div className="app__about-content__inner">
					<h2 className="heading__font-h2">Our History</h2>
					<img
						src={imgSrc.spoon}
						alt="Spoon"
						className="spoon__img"
					/>
					<p className="p__font">
						Adipiscing tempus ullamcorper lobortis odio tellus arcu
						volutpat. Risus placerat morbi volutpat habitasse
						interdum mi aliquam In sed odio nec aliquet.
					</p>
					<Button title="Know More" />
				</div>
			</div>
		</div>
	);
};

export default About;
