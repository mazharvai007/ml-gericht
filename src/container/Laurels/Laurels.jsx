import React from 'react';
import './laurels.css';
import imgSrc from '../../constants/imgSrc';
import { Heading } from '../../components';
import data from '../../constants/data';

const Laurels = () => {
	return (
		<div
			className="app__laurels section__padding app__bg flex__center"
			id="awards"
		>
			<div className="app__laurels-content flex__center">
				<div className="app__laurels-contentWrap">
					<Heading
						subTitle="Awards & recognition"
						title="Our Laurels"
					/>

					<div className="app__laurels-awards">
						{data.awards.map((award, index) => (
							<div
								className="app__laurels-award__single"
								key={award.title + index}
							>
								<img src={award.imgUrl} alt={award.title} />
								<div className="award__content">
									<h3 className="subtitle__font">
										{award.title}
									</h3>
									<p className="p__font">{award.subtitle}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="app__laurels_content-image">
					<img src={imgSrc.laurels} alt="Laurels" />
				</div>
			</div>
		</div>
	);
};

export default Laurels;
