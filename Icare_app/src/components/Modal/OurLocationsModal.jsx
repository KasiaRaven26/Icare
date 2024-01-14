import React from "react";
import "./ModalContent.css";

export function OurLocationsModal({ HidingTheButton }) {
  const Hide = () => {
    HidingTheButton();
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <header>
            <h1 className="highlight"> OUR LOCATIONS</h1>
          </header>
          <body>
            <p>Italy The Netherlands Germany</p>
          </body>
          <footer className="click-button">
            <button onClick={Hide}>Close</button>
          </footer>
        </div>
      </div>
    </div>
  );
}
