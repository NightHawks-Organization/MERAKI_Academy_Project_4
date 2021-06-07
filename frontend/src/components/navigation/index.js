import React from "react";
import { Link } from "react-router-dom";

import './navigation.css'

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/register" ><div className="link">Register</div></Link>
      <Link to="/login" ><div className="link">Login</div></Link>
      <Link to="/clinics" ><div className="link">Clinics</div></Link>
      <Link to="/doctors" ><div className="link">Doctors</div></Link>
      <Link to="/appointments" ><div className="link">Appointments</div></Link>
      <Link to="/schedule" ><div className="link">Schedule</div></Link>
    </div>
  );
};

export default Navigation;
