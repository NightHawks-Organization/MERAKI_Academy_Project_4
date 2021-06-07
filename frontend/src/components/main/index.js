import React from 'react';
import { Route } from "react-router-dom";

import './main.css'

import Navigation from "../navigation/index";
import Dashboard from "../dashboard/index";
import SignUp from "../auth/signUp";

const Main = () => {
	return <div className="main">
		<Navigation/>
		<Route path="/Register" render={()=><SignUp/>} />
		{/* className="login" token={token} setToken={setToken} */}
		{/* <Dashboard/> */}
	</div>;
};

export default Main;
