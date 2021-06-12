import React from 'react';
import { Link,Redirect } from "react-router-dom";

import './header.css'

const Header = ({token,setToken,setRole,setUserId}) => {

const logout=()=>{
	setToken(undefined)
	setRole(undefined)
	setUserId(undefined)
	localStorage.clear()
}

	return <div className="header">
		<span className='clinicName'>Access Medical Clinic</span>
		{token
		?<span className='logout' onClick={logout}>logout</span>
		:<Redirect to='/login'/>}
		
		</div>;
};

export default Header;
