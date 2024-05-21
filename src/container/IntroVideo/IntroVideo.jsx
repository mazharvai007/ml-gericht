import React, { useRef, useState } from 'react';
import './introvideo.css';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';

const IntroVideo = () => {
	const [playVideo, setPlayVideo] = useState(false);
	const videoRef = useRef();

	return (
		<div className="app__introVideo">
			<video
				src={meal}
				ref={videoRef}
				type="video/mp4"
				loop
				controls={false}
				muted
			/>

			<div className="app__introVideo-overlay flex__center">
				<div
					className="app__introVideo-overlay__circle flex__center"
					onClick={() => {
						setPlayVideo(!playVideo);

						if (playVideo) {
							videoRef.current.pause();
						} else {
							videoRef.current.play();
						}
					}}
				>
					{playVideo ? (
						<BsPauseFill color="#fff" size={30} />
					) : (
						<BsFillPlayFill color="#fff" size={30} />
					)}
				</div>
			</div>
		</div>
	);
};

export default IntroVideo;
