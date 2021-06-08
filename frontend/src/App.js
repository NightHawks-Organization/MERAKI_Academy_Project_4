import React from 'react';
import { Route } from 'react-router-dom';
import Calendar from 'react-calendar';
import SignUp from './components/auth/signUp'



const App = () => {
	return <div className="App">
<Calendar/>
<SignUp/>
	</div>;
};

export default App;
