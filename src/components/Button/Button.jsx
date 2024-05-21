import React from 'react';

const Button = ({ title, ...rest }) => {
	return (
		<>
			<button {...rest} className="app__button">
				{title}
			</button>
		</>
	);
};

export default Button;
