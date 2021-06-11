import React,{useState} from 'react';

import './schedule.css'

import Messages from '../auth/Messages'
const axios = require('axios').default;

const Schedule = ({userId}) => {
	const [date,setDate]=useState()
	const [time,setTime]=useState()
	// const [doctor,setDoctor]=useState() //by doctor id

	const [taken,setTaken]=useState('')

	const dateAndTime=`${date} At (${time}) in 24`

	// const change=(e)=>{
	// 	console.log(e.target.value);
	// }

	const checkAvailability=()=>{
		const doctor = '60bcfb42d0659b7944db9129'
		axios({
            method: 'get',
            url: `http://localhost:5000/appointment/dr/${doctor}`,
        })
        .then((response) => {  
// this is the response.data
//				[{ 
// 				  _id: 60c1164d87eaa45894158d6f,
// 				  date: 'Sun May 23 2021 00:00:00 GMT+0400 (Gulf Standard Time)'
// 				},
//               { _id: 60c1167987eaa45894158d70,
// 				  date: 'Mon May 24 2021 00:00:00 GMT+0400 (Gulf Standard Time)'}]

	const found = response.data.find((elem,i)=>{
	return elem.date===dateAndTime
	})
	// console.log(found);
	if(found){setTaken('Appointment taken')}else{setTaken('Appointment available')}
        })
        .catch((err) => {
            console.log('ERR: ', err.response);
        });
	}

	const addAppointment=()=>{
		axios({
            method: 'post',
            url: 'http://localhost:5000/appointment',
            data: {date:dateAndTime,user:userId,doctor:'60bcfb42d0659b7944db9129'}
        })
        .then((response) => {  
            console.log(response);
            // if(response.data.errors){console.log('You are not admin')}
            
        })
        .catch((err) => {
            console.log('ERR: ', err.response);
    
        });
	}

	return <div className="schedule"><h1>schedule component</h1>
	<form>
		<p>please enter your appointment date and time </p>
		<p>work hours from 8:00 am to 3:00 pm</p>
		<input style={{display:"inline"}} type='date'  min="2018-06-07" max="2018-06-14" required onChange={(e) => {setDate(e.target.value);}}/>
		<input style={{display:"inline"}} type='time'  min="08:00" max="15:00" step="1800" required onChange={(e) => {setTime(e.target.value);}}/>
		<input style={{display:"inline" , width:'120px'}} type="submit" value='check validity'/>
		<input style={{display:"inline", width:'120px'}} type="button" onClick={checkAvailability} value='check availability'/>
		{taken==='Appointment available'?<button type='button' style={{display:"block"}} onClick={addAppointment}>Schedule now</button>:null}
		</form>
		{taken==='Appointment taken'
		?<Messages className='failMessage' text={taken}/>
		:taken==='Appointment available'
		?<Messages className='successMessage' text={taken}/>
		:null}
	</div>;
};

export default Schedule;
