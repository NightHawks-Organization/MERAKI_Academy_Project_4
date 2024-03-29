import React from "react";
import { Link } from "react-router-dom";

import './navigation.css'

const Navigation = ({role,token}) => {
  return (
    <div className="navigation">
      {!token?<><Link to="/register" className='linkN' style={{textDecoration:"none"}} ><div className="link">Register</div></Link>
      <Link to="/login" className='linkN' style={{textDecoration:"none"}}><div className="link">Login</div></Link></>:null}
      <Link to="/clinics" className='linkN' style={{textDecoration:"none"}}><div className="link">Clinics</div></Link>
      <Link to="/doctors" className='linkN' style={{textDecoration:"none"}}><div className="link">Doctors</div></Link>
      {token?<><Link to="/appointments" className='linkN' style={{textDecoration:"none"}}><div className="link">Appointments</div></Link>
      <Link to="/schedule" className='linkN' style={{textDecoration:"none"}}><div className="link">Schedule</div></Link></>:null}
    </div>
  );
};

export default Navigation;
