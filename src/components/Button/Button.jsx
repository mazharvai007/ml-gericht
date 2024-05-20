import React from 'react';

const Button = ({ title }) => {
	return (
		<>
			<button type="button" className="app__button">
				{title}
			</button>
		</>
	);
};

export default Button;
