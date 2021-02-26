import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Provider from './provider/Provider';
import Home from './pages/Home';

const App = () => {
	return (
		<Router>
			<Provider>
				<Switch>
					<Route path="/" component={Home} />
				</Switch>
			</Provider>
		</Router>
	);
};

export default App;
