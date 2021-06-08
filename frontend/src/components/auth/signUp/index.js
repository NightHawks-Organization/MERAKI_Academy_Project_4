import React, { useState } from "react";
import axios from "axios";
import signUp from "./signUp.css";

const SuccessReg = (props) => {
  return (
      <div className={props.className}>
          {props.text}
      </div>
  )
}

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success,setSuccess]=useState(false);


 const  changeValue =(e)=>{
   setGender(e.target.value);

}
  const postUser = () => {
    console.log('hhhhhhh');
    axios
      .post(`http://localhost:5000/register`, {
        firstName: firstName,
        lastName: lastName,
        age: age,
        phoneNumber: phoneNumber,
        gender: gender,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          setSuccess(false);
        } else {

          setSuccess(true);
        }
      })
      .catch((error) => {});
      
  };

  return (
    <form className="register">
    <div>
      <label>First Name</label>
      <input
        type="text"
        placeholder="Enter First Name  "
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      /></div>
      <div>
      <label>Last Name</label>
      <input
        type="text"
        placeholder="Enter Last Name "
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      /></div>
        <div>
      <label>Age</label>
      <input
        type="number"
        placeholder="Enter Age "
        onChange={(e) => {
          setAge(e.target.value);
        }}
      /></div>
      <div>
      <label>phon Number</label>
      <input
        type="text"
        placeholder=" Enter phone Number "
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      /></div>
<div>
        <h5>Gender</h5>
      <div className="radio" onChange={changeValue}
>
        <label >Male</label>
        <input type="radio" id="male" name="gender" value="male" />
        <label >Female</label>
        <input type="radio" id="female" name="gender" value="female" />
      </div>
</div>
      <br/>
      <div>
      <label>Email</label>
      <input
        type="text"
        placeholder="Enter Email "
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      /> </div>
        <div>
      <label>password</label>
      <input
        type="password"
        placeholder="Enter password  "
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      /></div>
      <button onClick={postUser}>Register </button>
      {success === true ? <SuccessReg className ='success' text ='created successfully'/>
      :success === false ? <SuccessReg  text={success}/>
      :null}
  
    </form>
  );
}


