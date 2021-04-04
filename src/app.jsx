import React from 'react';
import ReactDOM  from 'react-dom';
import './app.scss';

import Header from './components/Header/Header.jsx';
import Banner from './components/Banner/Banner.jsx';
import MostAskedQuestions from './components/MostAskedQuestions/MostAskedQuestions.jsx';

const HomeSecurity = () => {
	return (
		<React.Fragment>
			<Header />
			<Banner />
			<MostAskedQuestions />
		</React.Fragment>
	);
};

ReactDOM.render(<HomeSecurity />, document.getElementById('root'));
