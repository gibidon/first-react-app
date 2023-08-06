import logo from './logo.svg'; //  императивный
import './App.css'; // императивный
import { createElement } from 'react';

const date = new Date().getFullYear().toString(); // императивный, шаги

const App = () => {
	//компоненты реакта по сути декларативные. Как и сам html
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<div>year now: {date}</div>
			</header>
		</div>
	);
};

export default App;
