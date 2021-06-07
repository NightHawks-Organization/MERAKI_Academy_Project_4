import React from "react";
import { Link } from "react-router-dom";

import './navigation.css'

const Navigation = () => {
  return (
    <div className="navigation">
      <div>
      Register
      </div>
      <div>
      Login
      </div>
      <div>
      Clinics
      </div>
      <div>
      Doctors
      </div>
      <div>
      Appointments
      </div>
      <div>
      Schedule
      </div>
    </div>
  );
};

export default Navigation;
