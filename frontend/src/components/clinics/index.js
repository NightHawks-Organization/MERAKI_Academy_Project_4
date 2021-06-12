import React,{useEffect} from "react";
import './clinics.css';


 export default function Clinics() {

  useEffect(()=>{
    
  })
	const listClinics = ['Neurology','Phsycology','Gastrology', 'Cardiology', 'Dermatology']
    return (
    	<div className ='Clinics'>
      {listClinics.map(Clinic => <h2 className='clinic' key={Clinic}>{Clinic}</h2>)}
      	</div>
    )
}