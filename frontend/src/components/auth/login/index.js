import React,{useState} from 'react'
import Messages from '../Messages';
import {Redirect} from 'react-router-dom';

import "./login.css";
const axios = require('axios').default;


const Login = ({token,setToken,role,setRole}) => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    const [loginResult,setLoginResult]=useState(undefined)

    const login =()=>{
        console.log('login button click');
        axios({
            method: 'post',
            url: 'http://localhost:5000/login',
            data: {email,password}
        })
        .then((response) => {  
            console.log(response);
            console.log(`response.data.Token`, response.data.Token)
            setToken(response.data.Token)
            setRole(response.data.role)
            //token connected to navigation options and redirect condition in app.js
           })
        .catch((err) => {
            console.log('err: ', err)
            // console.log('err.response.status: ', err.response.status)

            if(err.response.status===404){setLoginResult(404)}
            if(err.response.status===403){setLoginResult(403)}
            });
    }
    
    return (<>
        <form id="login">
      <div>
      <label>Email:</label>
      <input type="text" placeholder="Enter your Email here" onChange={(e) => {setEmail(e.target.value);}}/>
      </div> 
      <div>
      <label>Password:</label>
      <input type="password" placeholder="Enter your Password here " onChange={(e) => {setPassword(e.target.value);}}/>
      </div>
      <div>
      <button className='loginButton' type='button' onClick={login} >Login</button>
      </div>
     {loginResult===404?<Messages className='failMessage' text="The email doesn't exist"/>
     :loginResult===403?<Messages className='failMessage' text="The password you've entered is incorrect "/>
     :null}
      </form>
  {token?<Redirect to="/clinics" />:null}
</>
   )
}

export default Login


// for me to show login div in App
  
{/*
import Login from './components/auth/login';

const App = () => {
	return (<>
	<div className="App">App component</div> 
    <br /> <br />
    <Login />
    </> 
	)};

export default App;
*/}