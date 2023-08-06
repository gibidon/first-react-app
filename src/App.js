import logo from './logo.svg'; //  императивный
import './App.css'; // императивный
import { createElement } from 'react';

const date = new Date().getFullYear().toString(); // императивный, шаги

const App = () => {
	// такое описание компонента куда более императивное конечно чем jsx
	return createElement(
		'div',
		'App',
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			createElement(
				'p',
				{},
				'Edit ',
				createElement('code', {}, 'src/App.js and save to reload'),
				createElement(
					'a',
					{
						className: 'App-link',
						href: 'https://reactjs.org',
						target: '_blank',
						rel: 'noopener noreferrer',
					},
					createElement('br'),
					'Learn React',
				),
				createElement('div', {}, `year now:${date}`),
			),
		),
	);
};

export default App;
