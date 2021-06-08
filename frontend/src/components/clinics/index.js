import React,{useState} from "react";
import DatePicker from "react-datepicker";


 export default function Clinics() {


	const listClinics = ['Emergency Medicine','Family Medicine','Acupuncture', 'Cardiology', 'Dermatology']
    return (
    	<div>
     
      {listClinics.map(Clinic => <h2 key={Clinic}>{Clinic}</h2>)}
      	</div>
    )
}



