import React from "react";
import logo from "./I_care.jpg";

export function Header() {
  return (
    <div>
      <img className="logo" src={logo} alt="Logo" />
      {/*
      1 - The buttons need some styling and positioning in the header bar. Add a class name to them, e.g., className = "login-button", class="change-languge button".
      You'll then need to add the classname to the Header.css file, e.g., .login-button { height: 50px, etc..... }  
      2 - Add an 'onClick' to the buttons. For instance, the buttons should look something like <button onclick={clickEvent}>Login</button>
      3 - Above the return statement above, write an arrow function for the clickEvent. Something like - const clickEvent = () => { console.log("Hello Kasia")}
    */}
      <button>Login</button>
      <button>Change Language</button>
    </div>
  );
}
