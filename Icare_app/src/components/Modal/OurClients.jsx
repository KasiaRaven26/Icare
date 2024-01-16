import React from "react";
import "./ModalContent.css";

export function OurClientsModal({ HidingTheButton }) {
  const Hide = () => {
    HidingTheButton();
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <header>
            <h1 className="highlight"> OUR CLIENTS</h1>
          </header>
          <footer className="click-button">
            <button onClick={Hide}>Close</button>
          </footer>
        </div>
      </div>
    </div>
  );
}
