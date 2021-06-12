import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

import '../DoctorsList/DoctorsList.css'
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
    {doctors.map((elem,i)=>(<h4><Doctor key={i} name={elem.name} specialty={elem.specialty}/></h4>))}
    </div>
    {token?<button className='createDoc'><Link className='doc' to='/addDoctor'>+</Link></button>:null}
    </>
    )
}
export default DoctorsList;
