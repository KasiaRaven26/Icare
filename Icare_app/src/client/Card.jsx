// import React from "react";
import { Button } from "../components/ContetItems/Button";

import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h1><a>{props.children}</a></h1>
    </div>
  );
};

export default Card;
