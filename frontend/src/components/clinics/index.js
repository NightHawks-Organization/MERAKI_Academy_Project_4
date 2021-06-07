import React from "react";



 export default function Clinics() {
	const listClinics = ['Emergency Medicine','Family Medicine','Acupuncture', 'Cardiology', 'Dermatology']
    return (
    	<div>
      {listClinics.map(Clinic => <h2 key={Clinic}>{Clinic}</h2>)}
      	</div>
    )
}