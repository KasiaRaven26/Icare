import React from "react";
import "./ModalContent.css";

export function OurCaregiversModal({ HidingTheButton }) {
  const Hide = () => {
    HidingTheButton();
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <header>
            <h1 className="highlight"> OUR CAREGIVERS</h1>
          </header>
          <p></p>
          <body></body>
          <footer className="click-button">
            <button onClick={Hide}>Close</button>
          </footer>
        </div>
      </div>
    </div>
  );
}
