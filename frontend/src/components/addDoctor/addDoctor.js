import React,{useState} from 'react'

const axios = require('axios').default;

const NewDoctor= ({title,Specialty,className}) => {
const [title,setTitle]=useState()
const [Specialty,setSpecialty]=useState()

const [success,setSuccess]=useState(undefined)

    const createDoctor=()=>{
        if(token){
        axios({
            method: 'post',
            url: 'http://localhost:5000/doctoradd',
            data: {title,Specialty},
            headers: {'Authorization': `Bearer ${token}` }
        })
        .then((response) => {  
            console.log(response);
            console.log(token);
            if(response.data.errors){setSuccess('Error happened while creating a new doctor, please try again ')}
            else{setSuccess('Doctor has been created successfully')}
        })
        .catch((err) => {
            console.log('ERR: ', err.response);
    
        });
    }
    }

    return (
        <div className={className}>
           New Doctor
           <input type="text" placeholder="title here " onChange={(e) => {setTitle(e.target.value);}}/>
           <input type="text" style={{height:'120px'}} placeholder="Specailty here " onChange={(e) => {setSpecialty(e.target.value);}}/>
           <button className='registerButton' type='button' onClick={createDoctor}>Create new Doctor</button>
        {success==='Error happened while creating a new docor, please try again ' ?<SuccessReg className='failMessage' text={success}/>
        :success==='Doctor has been created successfully'?<SuccessReg className='successMessage' text={success}/>
    :null}
        </div>
    )
}

export default NewDoctor