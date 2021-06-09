import React,{useEffect} from "react";
import './clinics.css';


 export default function Clinics() {

  useEffect(()=>{
    
  })
	const listClinics = ['neurology','phsycology','gastrology', 'Cardiology', 'Dermatology']
    return (
    	<div className ='Clinics'>
      {listClinics.map(Clinic => <h2 key={Clinic}>{Clinic}</h2>)}
      	</div>
    )
}