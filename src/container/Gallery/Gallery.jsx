import React, { useRef } from 'react';
import './gallery.css';
import { Button, Heading } from '../../components';
import { data } from '../../constants';
import {
	BsArrowLeftShort,
	BsArrowRightShort,
	BsInstagram,
} from 'react-icons/bs';

const Gallery = () => {
	const scrollRef = useRef(null);

	const scroll = (direction) => {
		const { current } = scrollRef;

		if (direction === 'left') {
			current.scrollLeft -= 300;
		} else {
			current.scrollLeft += 300;
		}
	};

	return (
		<div className="app__gallery flex__center">
			<div className="app__gallery-content">
				<Heading subTitle="Instagram" title="Photo Gallery" />
				<p className="p__font">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Volutpat mattis ipsum turpis elit elit scelerisque egestas
					mu.
				</p>
				<Button title="View More" />
			</div>
			<div className="app__gallery-images">
				<div className="app__gallery-images__container" ref={scrollRef}>
					{data.galleryImages.map((image, index) => (
						<div
							className="app__gallery-images__card flex__center"
							key={image.title + index}
						>
							<img src={image.imgURL} alt={image.title} />
							<BsInstagram className="app__gallery-icon" />
						</div>
					))}
				</div>

				<div className="app__gallery-images__arrows">
					<BsArrowLeftShort
						className="app_gallery-arrow__icon"
						onClick={() => scroll('left')}
					/>
					<BsArrowRightShort
						className="app_gallery-arrow__icon"
						onClick={() => scroll('right')}
					/>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
