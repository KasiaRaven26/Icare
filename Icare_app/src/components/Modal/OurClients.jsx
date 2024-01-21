import React from "react";
import "./ModalContent.css";
import Button from "../../ButtonComponent/Button";

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
          <Button onClick={Hide}>Close</Button>
          </footer>
        </div>
      </div>
    </div>
  );
}
