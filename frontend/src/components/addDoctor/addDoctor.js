import React,{useState} from 'react'

import Messages from '../auth/Messages'

const axios = require('axios').default;

const NewDoctor= ({token,role}) => {
const [name,setName]=useState()
const [specialty,setSpecialty]=useState()

const [success,setSuccess]=useState(undefined)

    const createDoctor=()=>{
        if(role==='admin'){
            console.log('heeeeeeeeeeeeeeeeeeeeey');
        axios({
            method: 'post',
            url: 'http://localhost:5000/doctor',
            data: {name,specialty}
            
        })
        .then((response) => {  
            console.log(response);
            console.log(token);
            if(response.data.errors){setSuccess('You are not admin')}
            else{setSuccess('Doctor has been created successfully')}
        })
        .catch((err) => {
            console.log('ERR: ', err.response);
    
        });
    }{setSuccess('You are not an admin')}
    }

    return (
        <div className='addDoctor'>
           New Doctor
           <input type="text" placeholder="name here " onChange={(e) => {setName(e.target.value);}}/>
           <input type="text" placeholder="Specailty here " onChange={(e) => {setSpecialty(e.target.value);}}/>
           <button className='addButton' type='button' onClick={createDoctor}>Create new Doctor</button>
        {success==='You are not an admin' ?<Messages className='failMessage' text={success}/>
        :success==='Doctor has been created successfully'?<Messages className='successMessage' text={success}/>
    :null}
        </div>
    )
}

export default NewDoctor