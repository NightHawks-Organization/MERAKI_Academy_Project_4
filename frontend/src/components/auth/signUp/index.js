import React,{useState} from "react";
import axios from "axios";

export default function Register() {
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phonNumber, setPhonNumber] = useState(0);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postUser = () => {
    axios
      .post(`http://localhost:5000/users`, {
        firstName: firstName,
        lastName: lastName,
        age: age,
        phonNumber: phonNumber,
        gender: gender,
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          setMessage("The user has been created successfully");
        } else {
          setMessage("Error happened while register, please try again");
        }
      })
      .catch((error) => {});
  };
  return <form className='register'>
<input
        type="text"
        placeholder="Enter First Name  "
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Last Name "
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Enter Age "
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder=" Enter phone Number "
        onChange={(e) => {
            setPhonNumber(e.target.value);
        }}
      />
       <input
        type="text"
        placeholder="Enter Gender "
        onChange={(e) => {
            setGender(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Email "
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Enter password  "
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
    <button onClick={postUser}>Register </button>

  </form>;
}
