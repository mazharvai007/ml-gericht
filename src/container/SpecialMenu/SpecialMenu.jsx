import React from 'react';
import './specialMenu.css';
import Heading from '../../components/Heading/Heading';
import images from '../../constants/imgSrc';
import data from '../../constants/data';
import Button from '../../components/Button/Button';

const SpecialMenu = () => {
	return (
		<div className="app__specialMenu section__padding">
			<Heading
				subTitle="Menu that fits you palatte"
				title="Today’s Special"
			/>

			<div className="app__specialMenu-content flex__center">
				<div className="app__specialMenu-content__block">
					<h3 className="subtitle__font">Drinks</h3>

					<div className="app__specialMenu-menuItems">
						{data.drinks.map((item, index) => (
							<div
								className="app__specialMenu-menuItem"
								key={item.title + index}
							>
								<div className="app__specialMenu-menuItem__head">
									<div className="app__specialMenu-menuItem__name">
										<h4 className="subtitle__font">
											{item.title}
										</h4>
									</div>
									<div className="app__specialMenu-menuItem__dash"></div>
									<div className="app__specialMenu-menuItem__price subtitle__font">
										{item.price}
									</div>
								</div>

								<div className="app__specialMenu-menuItem__subHead">
									<p className="p__font">{item.tags}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="app__specialMenu-content_image">
					<img src={images.menu} alt="Special Menu" />
				</div>

				<div className="app__specialMenu-content__block">
					<h3 className="subtitle__font">Cocktails</h3>

					<div className="app__specialMenu-menuItems">
						{data.cocktails.map((item, index) => (
							<div
								className="app__specialMenu-menuItem"
								key={item.title + index}
							>
								<div className="app__specialMenu-menuItem__head">
									<div className="app__specialMenu-menuItem__name">
										<h4 className="subtitle__font">
											{item.title}
										</h4>
									</div>
									<div className="app__specialMenu-menuItem__dash"></div>
									<div className="app__specialMenu-menuItem__price subtitle__font">
										{item.price}
									</div>
								</div>

								<div className="app__specialMenu-menuItem__subHead">
									<p className="p__font">{item.tags}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<Button title="View More" />
			</div>
		</div>
	);
};

export default SpecialMenu;
