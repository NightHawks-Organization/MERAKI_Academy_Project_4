import React from 'react';
import { Link,Redirect } from "react-router-dom";

import './header.css'

const Header = ({token,setToken,setRole}) => {

const logout=()=>{
	setToken(undefined)
	setRole(undefined)
}

	return <div className="header">
		Header component 
		{token
		?<span onClick={logout}>logout</span>
		:<Redirect to='/login'/>}
		
		</div>;
};

export default Header;
