
import React,{useState,useEffect} from "react";
import { Route } from "react-router-dom";
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import Header from "./components/header/index";
import Main from "./components/main/index";
import PreFooter from "./components/prefooter/index";
import Footer from "./components/footer/index";
import Poster from "./components/poster/index";

import './App.css'

const App = () => {
  const [token,setToken]=useState()
  const [role,setRole]=useState()
  const [userId,setUserId]=useState()

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem('token')));
    setRole(JSON.parse(localStorage.getItem('role')));
    setUserId(JSON.parse(localStorage.getItem('userId')));
  }, []);

  return (
    <div className="App">
      <Header token={token}setToken={setToken} setRole={setRole} setUserId={setUserId}/>
      <Poster/>
      <Main token={token}setToken={setToken} role={role} setRole={setRole} userId={userId} setUserId={setUserId}/>
      <PreFooter/>
      <Footer/>
    </div>
  );
};

export default App;
