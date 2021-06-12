import React, { useState } from "react";
import axios from "axios";
import "./signUp.css";
import "./SuccessReg.css";
import { Redirect,useHistory } from "react-router-dom";

import SuccessReg from "./SuccessReg";

export default function Register() {
  let history = useHistory();
  const [success, setSuccess] = useState(undefined);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const changeValue = (e) => {
    setGender(e.target.value);
  };
  const postUser = () => {
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
      .then((response) => {
        console.log(response.data);
        if (response.data.errors || response.data.name === "MongoError") {
          if (response.data.errors) {
            if (response.data.errors.password) {
              if (response.data.errors.password.kind === "required") {
                setSuccess("Password required");
              }
            }
            if (response.data.errors.email) {
              if (response.data.errors.email.kind === "required") {
                setSuccess("E-mail required");
              }
            }
          }
          if (response.data.name === "MongoError") {
            if (response.data.code === 11000) {
              setSuccess(11000);
            }
          }
        } else {
          setSuccess(true);
          setRegister(true);
          history.push('/login')
        }
      })
      .catch((error) => {
        alert("Please connect to the right host");
      });
  };

  return (
    <>
      <form className="register">
     
        <div>
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter First Name  "
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name "
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            placeholder=" Enter phone Number "
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            placeholder="Enter Age "
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div>
          <label>E-mail</label>
          <input
            type="text"
            placeholder="Enter Email "
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />{" "}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password  "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <h5>Gender</h5>
          <div id="radio" onChange={changeValue}>
            <label>Male</label>
            <input type="radio" id="male" name="gender" value="male" />
            <label>Female</label>
            <input type="radio" id="female" name="gender" value="female" />
          </div>
        </div>
        <br />

        <button id="button" onClick={postUser}>
          Register{" "}
        </button>
        {success === true ? (
          <SuccessReg
            className="successMessage"
            text="The user has been created successfuly"
          />
        ) : success === "E-mail required" ? (
          <SuccessReg className="failMessage" text={success} />
        ) : success === "Password required" ? (
          <SuccessReg className="failMessage" text={success} />
        ) : success === 11000 ? (
          <SuccessReg
            className="failMessage"
            text={`E-mail is already taken`}
          />
        ) : null}
      </form>
      {register ? <Redirect to="/login" /> : null}
    </>
  );
}
