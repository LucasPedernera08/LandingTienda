import React from "react";
import './Logoscss.css';
import Logo from '../images/logo.jpg';

const LogoM = () => {
    return(
    <div className="Logo">
       <img src={Logo} height="162px" width="186px" /> 
    </div>
    ) 
  };
export default LogoM;