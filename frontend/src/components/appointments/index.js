import React,{useState,useEffect} from "react";

import Appointment from '../appointment/index'

const axios = require('axios').default;

 export default function Appointments({userId,role}) {
  const [appointments,setAppointments]=useState([])
  const [notLogged,setNotLogged]=useState()

  useEffect(() => {
    getAppointments();
  }, []);

	const getAppointments=()=>{
    
    //if user was logged in will get only his appointments\\******
    if(role==='user'){
    axios({
      method: 'get',
      url: `http://localhost:5000/appointment/${userId}`

  })
  .then((response) => {  
      console.log(response.data);
      setAppointments(response.data.result);
  })
  .catch((err) => {
      console.log('ERR: ', err.response);
  });
  }else if (role==='admin'){

//if admin was logged in will get all appointments\\******
    axios({
      method: 'get',
      url: `http://localhost:5000/appointment/`

  })
  .then((response) => {  
      console.log(response.data);
      setAppointments(response.data);
  })
  .catch((err) => {
      console.log('ERR: ', err.response);
  })
  }else{setNotLogged(true)}
}
    return (
    	<div className='appointments'>
        <span className='apps'>Appointments</span>
    {appointments.map((elem,i)=>(<Appointment key={i} date={elem.date} doctor={elem.doctor.name} id={elem._id} setAppointments={setAppointments}/>))}
    {notLogged?<p>please log in first</p>:null}
      	{/* <button type='button' onClick={getAppointments}>get my appointments</button> */}
        </div>
    )
}