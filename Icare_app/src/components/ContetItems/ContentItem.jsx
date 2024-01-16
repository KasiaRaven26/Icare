import "./ContentItem.css";
import { useState } from "react";

export function ContentItem(props) {
  const [showModal, setShowModal] = useState(false);

  const Adam = () => {
    props.showModal();
    setShowModal(!showModal);
  };

  return (
    <p className="join-us-box" onClick={Adam}>
      {props.children}
    </p>
  );
}
