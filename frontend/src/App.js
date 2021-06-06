import React from 'react';
import { Route } from 'react-router-dom';
import auth from './components/auth/signUp'

const App = () => {
	return <div className="App">
      <Route exact  path="/" component={auth} />

	</div>;
};

export default App;
