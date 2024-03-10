import React from "react";
import "./Footer.css";
import image from "../../public/images/A_K2.png";

export function Footer() {
  return (
    <div className="footer-div">
      <img className="ak-logo" src={image}></img>
    </div>
  );
}
