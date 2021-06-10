import React,{useState} from 'react';
import { Route } from "react-router-dom";

import './main.css'

import Navigation from "../navigation/index";
import Dashboard from "../dashboard/index";
import SignUp from "../auth/signUp";
import LogIn from "../auth/login";
import Clinics from "../clinics/index";
import Appointments from "../appointments/index";
import Doctors from "../DoctorsList/DoctorsList";
import AddDoctor from "../addDoctor/addDoctor";


const Main = ({token,setToken,role,setRole}) => {
    const [userId,setUserId]=useState()

	return <div className="main">
		<Navigation role={role} token={token}/>
		<Route path="/Register" render={()=><SignUp/>} />
		<Route path="/login" render={()=><LogIn token={token} setToken={setToken} role={role} setRole={setRole} setUserId={setUserId}/>} />
		<Route path="/clinics" render={()=><Clinics/>} />
		<Route path="/appointments" render={()=><Appointments userId={userId} role={role}/>} />
		<Route path='/doctors' render={()=><Doctors token={token}/>} />
		<Route path='/addDoctor' render={()=><AddDoctor token={token} role={role}/>} />
		{/* className="login" token={token} setToken={setToken} */}
		{/* <Dashboard/> */}
	</div>;
};


export default Main;
