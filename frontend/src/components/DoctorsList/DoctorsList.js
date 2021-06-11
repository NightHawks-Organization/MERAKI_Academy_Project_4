import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({name,specialty}) => {
    return (<>
        <div className="doctor">
            <span>{name}</span>
            <span> - {specialty}</span>
        </div>
        </>
    )
}


const axios = require('axios').default;

const DoctorsList = ({token}) => {
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
        setDoctors(response.data);
    })
    .catch((err) => {
        console.log('ERR: ', err.response);
    });
    
}
    return (<>
        <div className="doctors">
    {doctors.map((elem,i)=>(<Doctor key={i} name={elem.name} specialty={elem.specialty}/>))}
    </div>
    {token?<Link to='/addDoctor'>Add Doctor</Link>:null}
    </>
    )
}
export default DoctorsList;
