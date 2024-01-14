// import React from "react";
import { Button } from "../components/ContetItems/Button";

import "./Card.css";

const Card = (props) => {
  return <div className="card">
    <h1>{props.children}</h1>
    <p>Some information to go here</p>
    <Button>asddsa</Button>
    </div>;
};

export default Card;
