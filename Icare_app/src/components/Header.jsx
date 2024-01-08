import React from "react";
import logo from "./I_care.jpg";

export function Header() {
  return (
    <>
      <img className="logo" src={logo} alt="Logo" />

      <a href="https://www.w3schools.com">UK/PL</a>
    </>
  );
}
