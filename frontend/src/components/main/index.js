import React from 'react';

import './main.css'

import Navigation from "../navigation/index";
import Dashboard from "../dashboard/index";

const Main = () => {
	return <div className="main">
		<Navigation/>
		<Dashboard/>
	</div>;
};

export default Main;
