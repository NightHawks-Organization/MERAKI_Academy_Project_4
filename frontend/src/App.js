
import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/header/index";
import Main from "./components/main/index";
import PreFooter from "./components/prefooter/index";
import Footer from "./components/footer/index";

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <PreFooter/>
      <Footer/>
    </div>
  );
};

export default App;
