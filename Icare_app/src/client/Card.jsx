
import { GoChevronLeft } from "react-icons/go";

import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.header}>
        <a className={styles.link}>{props.children}</a>
      </h1>
      <div className={styles.content}>
        <div className={styles.iconDiv}>
          <GoChevronLeft size={30} />
        </div>
        <div className={styles.questionMark}>
          <div style={{position: "relative"}}>
            <span className={styles.tooltiptext}>
              Here is some information about the tile
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
