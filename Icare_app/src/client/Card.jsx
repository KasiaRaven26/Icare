
import { GoChevronLeft } from "react-icons/go";

import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.header}>
        {props.children}
      </h1>
      <div className={styles.content}>
   
        </div>
    </div>
  );
};

export default Card;
