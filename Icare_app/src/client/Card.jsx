// import React from "react";
import { Button } from "../components/ContetItems/Button";

import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      {/* <h1 className="h1"><a className="a">{props.children}</a></h1> */}
      <h1 className={styles.header}><a className={styles.link}>{props.children}</a></h1>
    </div>
  );
};

export default Card;
