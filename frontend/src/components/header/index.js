import React from 'react';
import { Link } from "react-router-dom";

import './header.css'

const Header = ({token,setToken}) => {

const logout=()=>{
	setToken(undefined)
}

	return <div className="header">
		Header component {token?<span onClick={logout}>logout</span>:null}
		</div>;
};

export default Header;
