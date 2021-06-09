import React from 'react';

import './appointment.css'

const axios = require('axios').default;


const Appointment = ({doctor,date,id,setAppointments}) => {


const deleteAppointmentById=(appId)=>{
	axios({
		method: 'delete',
		url: `http://localhost:5000/appointment/${appId}`
  
	})
	.then((response) => {  
		console.log(response.data);
		setAppointments(response.data)
	})
	.catch((err) => {
		console.log('ERR: ', err.response);
	});

}

	return <div className="appointment">{doctor} {date} <button className='delete' onClick={()=>deleteAppointmentById(id)}>X</button></div>;
};

export default Appointment;
