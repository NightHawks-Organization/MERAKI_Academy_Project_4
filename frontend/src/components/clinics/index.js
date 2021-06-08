import React from "react";
import Calendar from 'react-calendar';


 export default function Clinics() {
  const [value, onChange] = useState(new Date());

	const listClinics = ['Emergency Medicine','Family Medicine','Acupuncture', 'Cardiology', 'Dermatology']
    return (
    	<div>
      <Calendar onChange={onChange}
        value={value}
      />
      {listClinics.map(Clinic => <h2 key={Clinic}>{Clinic}</h2>)}
      	</div>
    )
}