import React, { useState } from 'react';
import './newsletter.css';
import { Button, Heading } from '../../components';
import Form from '../../components/Form/Form';
import TextInput from '../../components/TextInput/TextInput';

const NewsLetter = () => {
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="app__newsletter section__padding flex__center">
			<div className="app__newsletter-container">
				<Heading
					subTitle="Newsletter"
					title="Subscribe to Our Newsletter"
				/>
				<p className="p__font">And never miss latest Updates!</p>

				<div className="app__newsletter-formWrap">
					<Form
						className="app__newsletter-form"
						onSubmit={handleSubmit}
					>
						<TextInput
							type="email"
							placeholder="Enter Your Email Address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<Button title="Subscribe" type="submit" />
					</Form>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
