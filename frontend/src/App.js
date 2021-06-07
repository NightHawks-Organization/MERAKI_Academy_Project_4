import React from "react";
import { Route } from "react-router-dom";
import SignUp from "./components/auth/signUp";
import Clinics from "./components/clinics";

const App = () => {
  return (
    <div className="App">
      <SignUp />
      <Clinics />
    </div>
  );
};

export default App;
