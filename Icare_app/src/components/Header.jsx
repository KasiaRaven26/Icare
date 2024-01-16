import React from "react";
import logo from "./I_care.jpg";
import './Header.css';

export function Header() {
  return (
    <div style={{"position" : "relative"}}>
      <div className="image-div">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="link-div">
        <a  href="./client">Privacy</a>
        <a href="./client">Login</a>
        <a  href="./client">About Us</a>
      </div>
    </div>
  );
}
