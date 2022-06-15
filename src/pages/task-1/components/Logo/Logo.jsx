import React from "react";
import "./Logo.css"

import logo from "../../images/logo-tek-image.png";
import Cgi from "../../images/CGI.svg"
const Logo = () => {
  return (
    <div className="Logo">
        <img className="Logo__png" src={logo}></img>
        <img src={Cgi}></img>
    </div>
  );
};

export default Logo;
