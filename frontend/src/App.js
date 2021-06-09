
import React,{useState} from "react";
import { Route } from "react-router-dom";

import Header from "./components/header/index";
import Main from "./components/main/index";
import PreFooter from "./components/prefooter/index";
import Footer from "./components/footer/index";

import './App.css'

const App = () => {
  const [token,setToken]=useState()

  return (
    <div className="App">
      <Header token={token}setToken={setToken}/>
      <Main token={token}setToken={setToken}/>
      <PreFooter/>
      <Footer/>
    </div>
  );
};

export default App;
