import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({title,Specialty,className}) => {
    return (<>
        <div className={className}>
            <span style={{display:'inline'}}>{title}</span><span className="DoctorDetails" style={{fontSize:'16px'}}>Dr Details</span>
            <p>{Specialty}</p>
        </div>
        <br></br>
        </>
    )
}


const axios = require('axios').default;

const Dashboard = ({className}) => {
const [doctors,setDoctors]=useState([])

useEffect(() => {
    getAllDoctors();
  }, []);

const getAllDoctors=()=>{

    axios({
        method: 'get',
        url: 'http://localhost:5000/doctor' 
    })
    .then((response) => {  
        console.log(response.data);
        setDoctor(response.data);
    })
    .catch((err) => {
        console.log('ERR: ', err.response);
    });

}
    return (
        <div className={className}>
      <p>Dashboard</p>
      <button type='button' className='DoctorsListButton' onClick={getAllDoctors} style={{ width: '150px' }}>Our Doctors</button>
      <div className='Doctors'>
    {Doctors.map((elem,i)=>(<Doctor key={i} className="Doctor" name={elem.name} specialty={elem.specialty}/>))}
    </div>
    </div>
    
    )
}
export default DoctorsList;
