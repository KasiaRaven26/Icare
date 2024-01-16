import styles from "./ContentItem.module.css";
import { useState } from "react";

export function ContentItem(props) {
  const [showModal, setShowModal] = useState(false);

  const Adam = () => {
    props.showModal();
    setShowModal(!showModal);
  };

  return (
    <p className={styles.pill} onClick={Adam}>
      {props.children}
    </p>
  );
}
