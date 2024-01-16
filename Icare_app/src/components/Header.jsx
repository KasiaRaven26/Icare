import React from "react";
import logo from "./I_care.jpg";

export function Header( props ) {

    const clickEvent = () => {
    props.handleShowLogin();
  };
  
  return (
    <div>
      {/* <img className="logo" src={logo} alt="Logo" /> */}
      <button onClick={clickEvent}>Login</button>
      <button>Change Language</button>
    </div>
  );
}
