import React from 'react';
import './chef.css';
import imgSrc from '../../constants/imgSrc';
import Heading from '../../components/Heading/Heading';

const Chef = () => {
	return (
		<div className="app__chef app__bg section__padding flex__center">
			<div className="app__chef-chefWorld">
				<img src={imgSrc.chef} alt="Chef" />
			</div>
			<div className="app__chef-contentWrap">
				<Heading subTitle="Chef’s Word" title="What we believe in" />
				<div className="app__chef-content__chefInfo">
					<div className="app__chef-chefQuote">
						<img src={imgSrc.quote} alt="Quote" />
						<p className="p__font">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit auctor sit auctor sit iaculis in arcu.
							Vulputate nulla lobortis mauris eget sit. Nulla
							scelerisque scelerisque congue ac consequat, aliquam
							molestie lectus eu. Congue iaculis integer curabitur
							semper sit nunc.
						</p>
					</div>
					<div className="app__chef-info__block">
						<h3 className="subtitle__font">Kevin Luo</h3>
						<p className="p__font">Chef & Founder</p>
					</div>
					<div className="app__chef-info__signature">
						<img src={imgSrc.sign} alt="Signature" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Chef;
