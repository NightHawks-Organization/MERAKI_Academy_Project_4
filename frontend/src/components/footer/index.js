import React from "react";
import { Link,Route } from "react-router-dom";
import "./footer.css";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import SocialMedia from "./SocialMedia";




const Footer = () => {
  return (
    <div id="footer">
      <Link to="/AboutUs" style={{ textDecoration: "none" }}><Route path="/AboutUs" render={() => <AboutUs />} />
        <div className="link">About Us</div>
      </Link>
      <Link to="/ContactUs" style={{ textDecoration: "none" }}><Route path="/ContactUs" render={() => <ContactUs />} />
        <div className="link">Contact Us</div>
      </Link>
      <Link to="/SocialMedia" style={{ textDecoration: "none" }}><Route path="/SocialMedia" render={() => <SocialMedia />} />
        <div className="link">Social Media</div>
      </Link>
      
    </div>
  );
};

export default Footer;
